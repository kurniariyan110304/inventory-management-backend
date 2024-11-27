const jwt = require('jsonwebtoken');

const adminAuthorization = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token tidak ditemukan di header!' });
    }
    try{
        const actualToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
        if (decoded.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Akses ditolak! Anda bukan ADMIN.' });
        }
        next();
    } catch (error) {
        console.error('Authorization error', error.message);
        return res.status(401).json({ message: 'Token tidak valid atau sudah kedaluwarsa!' });
    }
};

module.exports = adminAuthorization;