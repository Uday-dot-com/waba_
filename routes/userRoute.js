var userController = require('../controllers/userController');

module.exports = (app, router) => {

    router.post('/registerUser',userController.registerUser);
  
    app.use('/api', router)

};