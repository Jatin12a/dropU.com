const driverModel = require('../models/driverModel')

module.exports.createDriver = async({
    firstname, lastname, email, password, color, plate, capacity, vehicletype
}) => {
    if (!firstname || !lastname || !email || !password || !vehicletype || !plate || !color || !capacity) {
        throw new Error("Please fill all the required fields");
    }

    const driver = await driverModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            vehicletype,
            color,
            plate,
            capacity
        }
    });
    return driver;
};
