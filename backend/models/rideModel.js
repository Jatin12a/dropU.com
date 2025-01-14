const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    driver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    pickup:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    fare:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum:['pending', 'accepted','ongoing', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration:{
        type: Number
    },
    distance:{
        type: Number
    },
    paymentID:{
        type: String
    },
    orderId:{
        type: String
    },
    signature:{
        type: String
    },
    otp:{
        type: String,
        select: false,
        required: true
    }

})
const Ride = mongoose.model('ride', rideSchema);
module.exports = Ride;