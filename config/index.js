/*To process Authentication & Authorization, we create following functions:
- check if token is provided, legal or not. We get token from x-access-token of HTTP headers, then use jsonwebtoken's verify() function
- check if roles of the user contains required role or not */
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

module.exports = {
  authJwt,
  verifySignUp
};