
var Book = require('../models/books')
var HttpStatus = require("http-status-codes");
const bcrypt = require("bcryptjs");

module.exports = {
    registerBook(requestBody, callback) {

        console.log("i am here uday")

      
                var book = new Book(requestBody);
                book.save((err, doc) => {
                    if (err) {
                        return callback(
                            {
                                httpCode: HttpStatus.FORBIDDEN,
                                message: " MESSAGES.INVALID_CREDENTIALS uday"
                            },
                            null
                        );
                    }
                    else {
                        return callback(null, doc);
                    }
                })

        
    },
} 