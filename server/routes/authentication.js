const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {


    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(400).json(savedUser);
    };
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.username } });
        if (!userData) {
            res.status(404).json({ message: 'Login failed. Please try again!' });
            return;
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );
        if (!validPassword) {
            res.status(400).json({ message: 'Login failed. Please try again!' });
            return;
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET,
            { expiresIn: '3d' }
        );
        res.status(200).json({ accessToken, message: 'You are now logged in!' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router