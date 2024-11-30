const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');
const blacklistTokenModel = require('../models/blacklistToken');
const driverModel = require('../models/driverModel')

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Please login to access this resource' });
    }

    try {

        const isBlacklisted = await blacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Token is blacklisted. Please login again.' });
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }


        req.user = user;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token. Please login again.' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.authDriver = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Please login to access this resource' });
    }
    const isBlacklisted = await blacklistTokenModel.findOne({
            token
        });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Token is blacklisted. Please login again' });
        }
    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const driver = await driverModel.findById(decoded._id);
        if (!driver) {
            return res.status(401).json({ message: 'Driver not found' });
        }
        req.driver = driver;
       return next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token. Please login again.' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }

}