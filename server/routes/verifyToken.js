const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) res.status(400).json('Token not valid');
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json('Not authenticated.');
    }
};

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(400).json('You are not authorised to continue.')
        };
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(400).json('You are not authorised to continue.')
        };
    });
};

module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin }