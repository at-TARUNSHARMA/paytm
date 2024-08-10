const express = require("express");
const zod=require("zod");
const JWT_SECRET = require("../config");
const router = express.Router();

const signupBody = zod.object({
    username:zod.string(),
    password:zod.string(),
    firstname:zod.string(),
    password:zod.string()
})
router.post("/signup",async(req,res) =>{
    const body=req.body;
    const {success}= signupBody.safeParse(req.body);
    if(!success){
        return res.json({
            message:"Invalid input"
        })
    }
    const existingUser = await User.findOne({
        message: req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message:"user already exist"
        })
    }
    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        password:req.body.password
    })
    const userId =user._id;

    const token = jwt.sign({
        userId
    },JWT_SECRET);
    res.json({
        message:"user created successfully",
        token: token
    })
})

module.exports =router;