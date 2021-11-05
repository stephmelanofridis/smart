const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true }
);

const Product = model('Product', ProductSchema);

module.exports = Product;