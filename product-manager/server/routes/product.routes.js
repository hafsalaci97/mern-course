const ProductController = require('../controllers/product.controller');

module.exports = app =>{
    app.get('/api/check', ProductController.checkResponse);
    app.get('/api/products/getAll', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
    app.post('/api/products/create', ProductController.createProduct);
}