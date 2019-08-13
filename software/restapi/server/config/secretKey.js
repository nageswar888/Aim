"use strict";

/*
    encodingBase64() function returns a encoded base64 string,
    which helps as a secret message in creating JWT token,
    secret key is unique for entire jwt token creation.
    
 */
function encodingBase64() {
  const secret_Message = "Life on earth is so miserable_90_yh_56_lo";

  return Buffer.from(secret_Message).toString("base64");
}

export const secret_key = encodingBase64();

