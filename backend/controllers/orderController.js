// builtin modules
const express = require("express");
const mongoose = require("mongoose");
const {tokenValidator} = require("../middleware/token");

// Models
const User = require("../models/userSchema");
const Product = require("../models/productSchema");
const Order = require("../models/orderSchema");

exports.proceedOrder = async (req, res) => {
    try {
        const {jwt} = req.cookies;
        const valid = await tokenValidator(jwt);
        const phone_no = await valid.phone_no;
        const findUser = await User.userModel.findOne({phone_no: phone_no});
        res.send(findUser._id)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};