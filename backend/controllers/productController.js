// builtin modules
const express = require("express");
const mongoose = require("mongoose");

// Models
const Product = require("../models/productSchema");

// create neew product
exports.newProduct = async (req, res) => {
    try {
        const utcTimeStamp = new Date().getTime();

        const product = new Product.productModel({
            title: req.body.title,
            desc: req.body.desc,
            img: req.body.img,
            price: req.body.price + ".00",
            shop: req.body.shop,
            publisher: req.body.publisher,
            status: true,
            created_date: utcTimeStamp,
            updated_date: utcTimeStamp,
            isDeleted: false,
        })
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

// get all user details route
exports.getAllproducts = async (req, res) => {
    try {
        const product = await Product.productModel.find();
    
        res.status(200).json(product);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
};

// // get one user details route
// exports.getUser = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const findUser = await User.userModel.findById(id);
    
//         res.send(findUser);
//     } catch (error) {
//         res.status(404).json({ message: error.message });        
//     }
// };

// // set inactive for one user
// exports.setUserStatus = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const findUser = await User.userModel.findById(id);
//         const userStatus = findUser.status;
        
//         const result = await User.userModel.findByIdAndUpdate(id, { status: !userStatus} );
//         res.send(result);
//     } catch (error) {
//         res.status(404).json({ message: error.message });    
//     }
// };