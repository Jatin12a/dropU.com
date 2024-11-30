const driverModel = require('../models/driverModel');
const driverservice = require('../services/driverService');
const { validationResult } = require('express-validator');

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
