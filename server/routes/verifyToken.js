const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) res.status(400).json('Token not valid');
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json('Not authenticated.');
    }
};

module.exports = { verifyToken }