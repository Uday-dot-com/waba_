const bookService=require("../services/bookService")
var logger = require('../logger');
var HttpStatus = require("http-status-codes");
module.exports = {
    addBook(req, res) {
     
        const requestBody = req.body;
        try {
            bookService.registerBook(requestBody, (err, result) => {
            if (err) {
              logger.error(err.message);
              return res.status(err.httpCode).json({
                message: err.message
              });
            }
            return res.status(HttpStatus.OK).json({
              status: "MESSAGES.BOOK_REGISTRATION_SUCCESS",
              data: result
            });
          });
        } catch (e) {
          logger.error(e);
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
          console.log(e);
        }
      
    },

    getBook(req, res) {
     
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
      
    },

    getallbooks(req, res) {
     
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
      
    },

    updatebook(req, res) {
     
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
      
    },
    deletebook(req, res) {
     
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