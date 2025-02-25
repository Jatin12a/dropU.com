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
module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}