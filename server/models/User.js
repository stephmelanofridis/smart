const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 10
    },
    orders: [Order.Schema],
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;