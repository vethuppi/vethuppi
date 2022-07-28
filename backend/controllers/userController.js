// builtin modules
const express = require("express");
const mongoose = require("mongoose");

// Models
const User = require("../models/userSchema");

// get all user(customer) details route
exports.getAllUsers = async (req, res) => {
    try {
        const findUsers = await User.userModel.aggregate([
            { $match: { role: { $eq: "customer" }, isDeleted: { $eq: false } } }, 
        ]);
            res.send(findUsers);
    
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
exports.setUserIsDeleted = async (req, res) => {
    const id = req.params.id;
    try {
        const findUser = await User.userModel.findById(id);
        const userIsDeleted = findUser.status;
        
        const result = await User.userModel.findByIdAndUpdate(id, { userIsDeleted: !userIsDeleted} );
        res.send(result);
    } catch (error) {
        res.status(404).json({ message: error.message });    
    }
};