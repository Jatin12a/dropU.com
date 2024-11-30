const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const driverSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name should be at least 3 characters'],
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name should be at least 3 characters'],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        select: false, // Don't send password by default
    },
    socketID: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'busy'],
        default: 'inactive', // Driver can have different statuses
    },
    vehicle: {

            vehicletype: {
                type: String,
                required: true,
                enum:['car','motorbike','auto']
            },
            plate: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            capacity: {
                type: Number,
                required: true,
            },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
});


driverSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
    return token;
};

driverSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


driverSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};



const driverModel = mongoose.model('Driver', driverSchema);

module.exports = driverModel;
