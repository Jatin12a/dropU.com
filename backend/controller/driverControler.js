const driverModel = require('../models/driverModel');
const driverservice = require('../services/driverService');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken')
module.exports.registerDriver = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    
    
    const driverExist = await driverModel.findOne({ email });
    if (driverExist) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    try {
        const driver = await driverservice.createDriver({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicletype: vehicle.vehicletype
        });

        const token = driver.generateAuthToken();
        res.status(201).json({ token, driver });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports.loginDriver = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
 
    
    
    const driver = await driverModel.findOne({ email }).select('+password');
    if (!driver) {
        return res.status(400).json({ message: 'Invalid email' });
    }

    const isValid = await driver.comparePassword(password);
    if (!isValid) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    
    const token = driver.generateAuthToken();
    res.cookie('token',token)
    res.status(200).json({ token, driver });
};

module.exports.getDriverProfile = async(req,res,next)=>{
    res.status(200).json({driver:req.driver})
}

module.exports.logoutDriver = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blacklistTokenModel.create({token})

    res.clearCookie('token')
     
    res.status(200).json({message:'Driver logged out successfully'})
    
}