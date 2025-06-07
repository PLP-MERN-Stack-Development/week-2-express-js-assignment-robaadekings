const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number},
    name: {type: String, required:true},
    description: {type: String},
    price: { type: Number},
    category: { type: String},
    instock: {type: Number, required: true},

});

module.exports = mongoose.model('product', productSchema);