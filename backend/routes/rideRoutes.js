const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const rideController = require('../controller/rideController')

const authMiddleware = require('../middlewares/authMiddleware')

router.post('/create',authMiddleware.authUser, (req, res) => {
    body('pickup').isString().isLength({min: 3}).withMessage('Invalid pickup address'),
    body('destination').isEmail().withMessage('Invalid destination address'),
    body('vehicletype').isString().isIn(['auto','car','motorbike']).withMessage('Invalid vehicle type')
    rideController.createRide(req, res)
})

module.exports = router