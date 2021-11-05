const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    postageAddress: {
        type: Object,
        required: true
    },
});

const Order = model('Order', OrderSchema);
module.exports = Order;

