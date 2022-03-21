const Product = require('../models/product.model');

//test the connection
module.exports.checkResponse = (req, res) => {
    res.json({message: "Checking if it works."});
}

module.exports.findAllProducts = (req, res) =>{
    Product.find()
        .then(allProducts=>res.json({results: allProducts}))
        .catch(err=>res.json({message: "Couldn't get the Products!", err}));
}

module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
        .then(newProduct=>res.json({results: newProduct}))
        .catch(err=>res.json({message: "Creation Failed!", err}));
}

module.exports.getProduct = (req, res) =>{
    Product.findOne({_id: req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.json(err));
}