const rideModel = require('../models/rideModel');
const mapService = require('./mapServices');
const crypto = require('crypto');



async function getFare(pickup,destination){
    if(!pickup || !destination){
        throw new Error('pickup and destination are required');
    }
    const distanceTime = await mapService.getDistanceTime(pickup,destination);
    const fareRates = {
        auto: 10, // rate per km
        car: 15,  // rate per km
        motorbike: 5   // rate per km
    };
    console.log(distanceTime);
    

    const fare = {
        auto: ((distanceTime.distance.value / 1000) * fareRates.auto).toFixed(2),
        car: ((distanceTime.distance.value / 1000) * fareRates.car).toFixed(2),
        motorbike: ((distanceTime.distance.value / 1000) * fareRates.motorbike).toFixed(2)
    };
     

    return fare;
}

module.exports.getFare = getFare; 

function getOTP(num){
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}


module.exports.createRide = async ({
    user, pickup, destination, vehicletype
}) => {
    if(!user || !pickup || !destination || !vehicletype){
        throw new Error('user, pickup, destination and vehicletype are required');
    }
    const fare = await getFare(pickup, destination);
    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp:getOTP(4),
        fare: fare[vehicletype],
    });

    await ride.save();
    return ride;
    
}
