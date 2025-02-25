const userModel = require('../models/UserModel');
const userService = require('../services/userService');
const { validationResult } = require('express-validator');
const blacklistToken = require('../models/blacklistToken')


module.exports.registerUser = async (req, res, next) => {
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body;

        const userExist = await userModel.findOne({email});
        if (userExist) {
            return res.status(400).json({ message: 'Email already exist' });
            }
        
        const hashedPassword = await userModel.hashPassword(password);

        
        console.log(req.body);
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthToken();

        res.status(201).json({ token, user });
        console.log("User Created");
        
     
};

module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
      const {email,password} = req.body;  
    
      const user = await userModel.findOne({email}).select('+password');
      if(!user) return res.status(401).json({error:"Invalid Email or Password"}
        );
        const isValidPassword = await user.comparePassword(password,user.password);
        if(!isValidPassword) return res.status(401).json({error:"Invalid Email or Password"});

        const token = user.generateAuthToken();
        res.cookie('token',token)
        console.log("login success");
        
        res.status(200).json({token,user});
}

 module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);

 }

 module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    await blacklistToken.create({token})

    res.status(200).json({message:"Logged out successfully"})
 }