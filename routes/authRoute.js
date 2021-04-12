var authController = require('../controllers/authController');
 var authMiddleware = require("../helpers/auth");

module.exports = (app, router) => {

    router.post('/logIn',authController.signIn);
    router.get('/refreshToken',authMiddleware.checkAuth, authController.refreshToken);

    app.use('/api', router)

};