import express from 'express';
import {userModel} from '../models/user.model.js';
import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';
import crypto from 'crypto';


const jwt = jsonwebtoken;

const authRouter = express.Router();

authRouter.post('/register', async(req, res)=>{
    const {email, name, password} = req.body;

    const isUserAlreadyRegistered = await userModel.findOne({email});

    if(isUserAlreadyRegistered){
        return res.status(400).json({
            message:"User Already Exists with this email."
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        name, email, password: hash
    })

    const token = jwt.sign({
        id:user._id,
        email: user.email
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        message: "User Created Successfully",
        user,
        token
    })
})

authRouter.post('/protected', async(req, res)=>{
    console.log(req.cookies);

    res.status(200).json({
        message: "This is a protected Route."
    })
})

authRouter.post('/login', async(req, res)=>{
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(404).json({
            message: "User does not Exists please Register First"
        })
    }

    const userPassword = user.password === crypto.createHash("md5").update(password).digest("hex");

    if(!userPassword){
        return res.status(401).json({
            message: "Incorrect Password"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(200).json({
        message: "User Logged In"
    })
})

export {authRouter};