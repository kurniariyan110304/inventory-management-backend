const jwt = require('jsonwebtoken');

function authorizeJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token tidak valid atau tidak ada!' });
    }

    const token = authHeader.split(' ')[1]; 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; 
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token tidak valid atau sudah kedaluwarsa!' });
    }
}

module.exports = authorizeJWT;      