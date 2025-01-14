const rideService = require('../services/rideService');
const { validationResult } = require('express-validator');


module.exports.createRide = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userId, pickup, destination, vehicletype } = req.body;
    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicletype });
        return res.status(200).json(ride);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }


}