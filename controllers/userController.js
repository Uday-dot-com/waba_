const userService=require("../services/userService")
var logger = require('../logger');
var HttpStatus = require("http-status-codes");
module.exports = {
    registerUser(req, res) {
     
        const requestBody = req.body;
        try {
          userService.registerUser(requestBody, (err, result) => {
            if (err) {
              logger.error(err.message);
              return res.status(err.httpCode).json({
                message: err.message
              });
            }
            return res.status(HttpStatus.OK).json({
              status: "MESSAGES.USER_REGISTRATION_SUCCESS",
              data: result
            });
          });
        } catch (e) {
          logger.error(e);
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
          console.log(e);
        }
      
    }
}  