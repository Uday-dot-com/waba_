
var User = require('../models/signup')
var HttpStatus = require("http-status-codes");
const bcrypt = require("bcryptjs");

module.exports = {
    registerUser(requestBody, callback) {

        console.log("i am here uday")

        bcrypt.genSalt(10, (err, salt) => {
            console.log("i am here uday")
            if (err) throw err;
            bcrypt.hash(requestBody.password, salt, (err, hash) => {
                requestBody.password = hash;
                var user = new User(requestBody);
                user.save((err, doc) => {
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

            });
        });
   



































        // models.h_user.findOne({ where: { emailId: requestBody.emailId } }).then(result => {
        //     if (result != null) {
        //       return callback({httpCode: HttpStatus.CONFLICT,message:MESSAGES.USER_ALREADY_EXISTS}, null)
        //     } else {
        //       bcrypt.genSalt(10, (err, salt) => {
        //         if (err) throw err;
        //         bcrypt.hash(requestBody.password, salt, (err, hash) => {
        //         //   if (err) throw err;
        //         //   requestBody.password = hash;
        //         //   requestBody.createdBy = "owner";
        //         //   requestBody.isUserValidated = false;
        //         //   generatedCode = commonFunction.generateRandomCode();
        //           //commonFunction.removeOldCodes(requestBody.emailId, MESSAGES.ACTIVATION_TEXT_FOR_CODE);
        //          // models.h_code.destroy({ where: { emailId: requestBody.emailId, usedFor: MESSAGES.ACTIVATION_TEXT_FOR_CODE } }).then(rowsAffected => {
        //             //generatedCode= randomInt(100000,999999);
        //             models.h_user.create(requestBody).then(user => {
        //               notification.sendNotification(requestBody.emailId,generatedCode,MESSAGES.ACTIVATION_EMAIL_SUBJECT, MESSAGES.ACTIVATION_EMAIL_TEXT);
        //               var data=[]; 
        //               var codeModel = {
        //                 emailId: requestBody.emailId,
        //                 mobileNumber: requestBody.mobileNumber,
        //                 generatedCode: generatedCode,
        //                 expirationTime: Date.now() + 300000,
        //                 usedFor: MESSAGES.ACTIVATION_TEXT_FOR_CODE
        //               };
        //             //   var locationModel = {
        //             //     userId:user.dataValues.userId,
        //             //     locationName: "Hall"
        //             //   };
        //               models.h_code.create(codeModel).then(result => {

        //               models.h_location.create(locationModel).then(result => {
        //                 data.push(user);
        //                 return callback(null, data);
        //               });
        //             });
        //             });
        //          // })
        //           });
        //       });
        //     }
        //   });

    },
}  