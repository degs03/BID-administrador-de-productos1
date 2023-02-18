const ProductController = require('../controllers/products.controllers');


module.exports =  app => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.findProduct);
}
