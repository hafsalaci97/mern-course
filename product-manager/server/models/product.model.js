const mongoose = require('mongoose');
// const decimal = mongoose.Decimal128;
const ProductSchema = new mongoose.Schema ({
    productTitle: {
        type: String
    },
    productPrice: {
        type: Number
    },
    productDescription: {
        type: String
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;