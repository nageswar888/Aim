"use strict";

let _ = require("lodash");


/**
 *
 * @type {{errors: (function(*=): {message: *, status: *})}}
 * @returns {{status: HTTP STATUSCodes , message: error messages}}
 */
let error_responsive = {
  errors: function(response) {
    let reply;
    let key = Object.keys(response).toString();

    if (key === "error") {
      if (
        response.error[0].success === false &&
        response.error[0].status === 403 &&
        _.toLower(response.error[0].message) === "invalid token"
      ) {
        reply = {
          status: response.error[0].status,
          message: response.error[0].message
        };
      } else if (
        response.error[0].success === false &&
        response.error[0].status === 403 &&
        _.toLower(response.error[0].message) === "invalid signature"
      ) {
        reply = {
          status: response.error[0].status,
          message: response.error[0].message
        };
      } else if (
        response.error[0].success === false &&
        response.error[0].status === 403 &&
        _.toLower(response.error[0].message) === "jwt expired"
      ) {
        reply = {
          status: response.error[0].status,
          message: response.error[0].message
        };
      } else if (
        response.error[0].success === false &&
        response.error[0].status === 403 &&
        _.toLower(response.error[0].message) === "jwt malformed"
      ) {
        reply = {
          status: response.error[0].status,
          message: response.error[0].message
        };
      } else if (
        response.error[0].success === false &&
        response.error[0].status === 403 &&
        _.toLower(response.error[0].message) === "jwt signature is required"
      ) {
        reply = {
          status: response.error[0].status,
          message: response.error[0].message
        };
      }
    } else if (key === "unavailable") {
      if (
        response.unavailable[0].success === false &&
        response.unavailable[0].status === 404 &&
        response.unavailable[0].message === "unavailable"
      ) {
        reply = {
          status: response.unavailable[0].status,
          message: "token unavailable"
        };
      }
    }
    return reply;
  }
};

export const response_jwt = error_responsive;
