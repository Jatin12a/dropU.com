const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/userController');

router.post('/register', [
    body('email').isEmail().withMessage("invalid email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("first name should be 3 characters or more"),
    body('password').isLength({ min: 8 }).withMessage("password must be at least 8 characters"),
], userController.registerUser);

module.exports = router;
