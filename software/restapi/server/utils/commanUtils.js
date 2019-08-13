"use strict";


import { secret_key } from "../config/secretKey";
import { response_jwt } from "./errorsResponse";
let jwt = require("jsonwebtoken");

/**
 * JWT token creation
 * @type {{jwtToken: (function(*=): *)}}
 * @returns token {string}
 */
let jwtTokenDetails = {
  jwtToken: function(email) {
    return jwt.sign({ email: email }, secret_key, { expiresIn: "24h" });
  }
};
export const jwtTokenPasser = jwtTokenDetails;


/**
 *
 * @type {{tokenVerification: header_Token_Verifier.tokenVerification}}
 * @params req,res,next
 * token verification if success
 * @next() call goes to route call
 * or else responses with token error
 */
let header_Token_Verifier = {
  "tokenVerification": function(req, res, next) {
    let object_json = {};
    let token = req.headers.authorization;

    if (token) {
      jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
          let key = "error";
          object_json[key] = [];
          let error_json = {
            name: err.name,
            success: false,
            message: err.message,
            status: 403
          };

          object_json[key].push(error_json);
          let statusResponse = response_jwt.errors(JSON.parse(JSON.stringify(object_json)));
          res.status(statusResponse.status).json(statusResponse);
        } else {
          next();
        }
      });
    } else {
      let key = "unavailable";
      object_json[key] = [];
      let unavailable = {
        success: false,
        status: 404,
        message: "unavailable"
      };
      object_json[key].push(unavailable);
      let statusResponse = response_jwt.errors(JSON.parse(JSON.stringify(object_json)));
      res.status(statusResponse.status).json(statusResponse);
    }
  }
};

export const verification = header_Token_Verifier;
