// builtin modules
const express = require("express");
const mongoose = require("mongoose");

// Models
const User = require("../models/userSchema");


const {hashGenerate} = require("../middleware/hashing");
const {hashValidator} = require("../middleware/hashing");
const {tokenGenerator} = require("../middleware/token");
// const authVerify = require("../helpers/authVerify");

// signup route
exports.signup = async (req, res) => {
    try {
        const existingUser = await User.userModel.findOne({phone_no:req.body.phone_no});
        if(existingUser) {
            res.send('Phone No already registered!!!');
        } else {
            const utcTimeStamp = new Date().getTime();
            const hashPassword = await hashGenerate(req.body.password);
            
            const user = new User.userModel({
                full_name: req.body.full_name,
                phone_no: req.body.phone_no,
                address: req.body.address,
                password: hashPassword,
                isDeleted: false,
                role: "customer",
                created_datetime: utcTimeStamp,
                updated_datetime: utcTimeStamp,
            })
            const savedUser = await user.save();
            res.send(savedUser);
            
        }
        
    } catch (error) {
        res.send(error)
    }
};

// login route
exports.signin =  async (req, res) => {
    try {
        const existingUser = await User.userModel.findOne({phone_no:req.body.phone_no});
        if(!existingUser){
            res.send("Phone no is invalid");
        }else{
            const checkUser = await hashValidator(req.body.password, existingUser.password);
            if(!checkUser){
                res.send("password is invalid");
            } else {
                const token = await tokenGenerator(existingUser.phone_no, existingUser.role);
                res.cookie("jwt", token, {httpOnly: true});
                const checkIsDeleted = await existingUser.isDeleted;
                const checkRole = await existingUser.role;
                if(checkIsDeleted) {
                    res.send("Inactive");
                } else {
                    if(checkRole === "customer") {
                        res.send("customer login");
                    } else if (checkRole === "admin") {
                        res.send("Admin login");
                    }
                }
            }
        }        
    } catch (error) {
        res.send(error);
    }
};