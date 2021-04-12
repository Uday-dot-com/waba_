var authService = require("../services/authService");
var logger = require('../logger');
var HttpStatus = require("http-status-codes");
module.exports = {
    signIn(req, res) {
     
        const body = req.body;
        try {
          authService.signIn(body, (err, result) => {
            if (err) {
              return res.status(err.httpCode).json({
                status: err.message
              });
            }
            return res.status(HttpStatus.OK).json({
              status: "MESSAGES.LOGGED_IN_SUCCESSFULLY",
              data: result
            });
          });
        } catch (e) {
          logger.error(e);
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
          console.log(e);
        }
     
    },


    refreshToken(req, res) {
      const userId = req.userId;
      try {
        authService.refreshToken(userId, async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: "MESSAGES.TOKEN_REFRESHED",
            data: result
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.UNAUTHORIZED).send(e);
        console.log(e);
      }
    }
  };
  
