const jwt = require("jsonwebtoken");
var jwtDecode = require("jwt-decode");
var express = require("express");
// var models = require("../db/models/index");
// var MESSAGES = require("../helpers/message");
var logger = require("../logger");

var User = require('../models/signup')
var HttpStatus = require("http-status-codes");
const config = require('../config/tokenContent');


var auth = {
  checkAuth: async function checkAuth(req, res, next) {
    if (!req.header("authorization")) {
      logger.error("MESSAGES.MISSING_AUTH_HEADER");
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .send({ message: "MESSAGES.MISSING_AUTH_HEADER" });
    }

    var token = req.header("authorization").split(" ")[1];
                
    var payload = jwt.sign(token, "123");

    if (!payload) {
      logger.error("MESSAGES.UNAUTHORIZED");
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .send(payload, { message:" MESSAGES.UNAUTHORIZED "});
    } else {
      var decoded = jwtDecode(token);
        req.userId = decoded.id;
        // var user = new User(req.body);
        await  User
          .findOne({  userId: req.userId  })
          .then(result => {
            if(result == null ){
              return res
                  .status(HttpStatus.UNAUTHORIZED)
                  .send({ message:" MESSAGES.UNAUTHORIZED_USER_DOES_NOT_EXISTS" });
            }else{
              jwt.verify(token, "123", (err, user) => {
                if (err) {
                  logger.error("MESSAGES.INVALID_AUTH_HEADER");
                  return res
                    .status(HttpStatus.UNAUTHORIZED)
                    .send({ message:" MESSAGES.INVALID_AUTH_HEADER "});
                } else {
                  console.log("SUCCESS: Connected to protected route");
                  next();
                }
              });
            }

          });
    }
  }
};

module.exports = auth;
