// builtin modules
const express = require("express");
const mongoose = require("mongoose");

// Models
const User = require("../models/userSchema");

// get all user details route
exports.getAllUsers = async (req, res) => {
    try {
        const findUsers = await User.userModel.find();
    
        res.status(200).json(findUsers);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
};

// get one user details route
exports.getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const findUser = await User.userModel.findById(id);
    
        res.send(findUser);
    } catch (error) {
        res.status(404).json({ message: error.message });        
    }
};

// set inactive for one user
exports.setUserStatus = async (req, res) => {
    const id = req.params.id;
    try {
        const findUser = await User.userModel.findById(id);
        const userStatus = findUser.status;
        
        const result = await User.userModel.findByIdAndUpdate(id, { status: !userStatus} );
        res.send(result);
    } catch (error) {
        res.status(404).json({ message: error.message });    
    }
};