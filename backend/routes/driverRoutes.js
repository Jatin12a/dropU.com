const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const driverController = require('../controller/driverControler');

router.post(
    '/register',[
        body('fullname.firstname').isLength({ min: 3 })
            .withMessage('First name must be at least 3 characters'),
        body('fullname.lastname').isLength({ min: 3 })
            .withMessage('Last name must be at least 3 characters'),
        body('email').isEmail()
            .withMessage('Invalid email format'),
        body('password').isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters'),
        body('vehicle.vehicletype').notEmpty()
            .withMessage('Vehicle type is required')
            .isIn(['car', 'motorbike', 'auto'])
            .withMessage('Vehicle type must be one of: car, motorbike, auto'),
        body('vehicle.plate').notEmpty()
            .withMessage('Vehicle plate is required'),
        body('vehicle.color').notEmpty()
            .withMessage('Vehicle color is required'),
        body('vehicle.capacity').isInt({ min: 1 })
            .withMessage('Vehicle capacity must be a positive integer'),
    ],
    driverController.registerDriver
);

module.exports = router;
