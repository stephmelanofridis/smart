const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
