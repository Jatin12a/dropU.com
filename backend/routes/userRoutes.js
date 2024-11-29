const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/userController');
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register', [
    body('email').isEmail().withMessage("invalid email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("first name should be 3 characters or more"),
    body('password').isLength({ min: 6 }).withMessage("password must be at least 8 characters"),
], userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({ min: 6 }).withMessage("password is wrong")

],userController.loginUser)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

router.get('/logout', authMiddleware.authUser,userController.logoutUser );

module.exports = router;
