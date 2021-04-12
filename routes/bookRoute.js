 var authMiddleware = require("../helpers/auth");
var bookController = require('../controllers/bookController');

module.exports = (app, router) => {
    router.post('/book',authMiddleware.checkAuth,bookController.addBook);
    router.get('/book/:bookId',bookController.getBook),
    router.get('/books',bookController.getallbooks),
    router.put('/book/update',bookController.updatebook),
    

    app.use('/api', router)

};