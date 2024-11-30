const driverModel = require('../models/driverModel')

module.exports.createDriver = async({
    firstname, lastname, email, password, color, plate, capacity, vehicletype
}) => {
    if (!firstname || !lastname || !email || !password || !vehicletype || !plate || !color || !capacity) {
        throw new Error("Please fill all the required fields");
    }
    const hashedPassword = await driverModel.hashPassword(password);

    const driver = await driverModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password:hashedPassword,
        vehicle: {
            vehicletype,
            color,
            plate,
            capacity
        }
    });
    return driver;
};
