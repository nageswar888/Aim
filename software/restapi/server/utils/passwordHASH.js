"use strict";
const crypto = require("crypto");

/**
 * salt [random string] for passwords
 * @function
 * @returns {string}
 */
let getRandomString = function() {
  let length = 16;
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};

/**
 *
 * @param password
 * @param salt
 * @returns {{salt: string, passwordHASH: string}}
 */
let hashedPassword = function(password, salt) {
  let hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  let passwordValue = hash.digest("hex");
  return { salt: salt, passwordHASH: passwordValue };
};

export const authPassword = hashedPassword;

/**
 *
 * @param password
 * @returns {{salt: string, passwordHASH: string}}
 */
let hashPassword = {
  "hash":function (password) {
    let salt = getRandomString();
    return hashedPassword(password, salt);
  }
};

export const passwordHASH = hashPassword;

