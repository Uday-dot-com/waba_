var User = require('../models/signup')
var HttpStatus = require("http-status-codes");
const bcrypt = require("bcryptjs");
var logger = require('../logger');
const config = require('../config/tokenContent');
const jwt = require('jsonwebtoken');
module.exports = {
  signIn(body, callback) {

    var userData = body;
    console.log(body)

    User.findOne({ email: userData.email })
      .then(function (result) {
        if (result == null) {
          logger.error("MESSAGES.INVALID_CREDENTIALS");
          return callback(
            {
              httpCode: HttpStatus.FORBIDDEN
            },
            null
          );
        }
        bcrypt.compare(body.password, result.password).then(isMatch => {
          if (isMatch) {
            const payload = {
              id: result.userId
            };
            let tokenSecret = config.secret;
            jwt.sign(payload, tokenSecret, { expiresIn: config.tokenLife},(err, token) => {
                if (err) {
                  logger.error(MESSAGES.INVALID_CREDENTIALS);
                  return callback(
                    {
                      httpCode: HttpStatus.FORBIDDEN,
                      message: MESSAGES.INVALID_CREDENTIALS
                    },
                    null
                  );
                } else {
                  var data = [];
                  //data.push(result);
                  var userInfo = {
                    email: result.email,
                          username: result.username,
                          password: result.password,
                          phone_no: result.phone_no,
                          address: result.address,
                          token: token,
                    tokenExpiresIn:config.tokenLife
            
                  };
                  //data.push(token);
                  data.push(userInfo);
                  return callback(null, data);
                }
            });
          }






        // bcrypt.compare(body.password, result.password).then(isMatch => {
        //   if (isMatch) {

        //     var data = [];

        //     var userInfo = {
        //       email: result.email,
        //       username: result.username,
        //       password: result.password,
        //       phone_no: result.phone_no,
        //       address: result.address

        //     };

        //     data.push(userInfo);
        //     return callback(null, data);

        //   }
          else {
            logger.error("MESSAGES.INVALID_CREDENTIALS");
            return callback(
              {
                httpCode: HttpStatus.FORBIDDEN,
                message: " MESSAGES.INVALID_CREDENTIALS uday"
              },
              null
            );
          }
        });
      });
  },

  refreshToken(userId, callback){
    const payload = {
      id: userId
    };
    let refreshSecret = config.refreshTokenSecret;
      jwt.sign(payload, refreshSecret, {expiresIn: config.refreshTokenLife}, (err, refreshToken )=>{
        if (err) {
          logger.error("MESSAGES.INVALID_CREDENTIALS");
          return callback(
            {
              httpCode: HttpStatus.FORBIDDEN,
              message: "MESSAGES.INVALID_CREDENTIALS"
            },
            null
          );
        } else {
          var data = [];
          var userInfo = {
            userId: userId,
            refreshToken: refreshToken,
            refreshTokenExpiresIn: config.refreshTokenLife
          };
          //data.push(token);
          data.push(userInfo);
          return callback(null, data);
        }
      })
  }
}