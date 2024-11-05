import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import 'dotenv/config'

const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false, message:"User does not exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success:false, message:"Invalid credentials"});
        }
        
        const token = createToken(user._id);
        res.json({ success: true, token, isAdmin: user.isAdmin });

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"});
        }
        if(!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter valid email"});
        }
        if(password.length<8){
            return res.json({success:false, message:"Please enter strong password"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

const makeAdmin = async (req,res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "Authorization token required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findByIdAndUpdate(
            decoded.id,
            { isAdmin: true },
            { new: true }
        );

        if (user) {
            return res.json({ success: true, message: "User updated to admin successfully", isAdmin: user.isAdmin });
        } else {
            return res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error updating admin status" });
    }
}

export {loginUser, registerUser, makeAdmin}