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
            isDeleted: true,
        })
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

// get all product details route
exports.getAllProducts = async (req, res) => {
    try {
        const findProducts = await Product.productModel.find();
        res.status(200).json(findProducts);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
};

// // get one product details route
exports.getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const findProduct = await Product.productModel.findById(id);
    
        res.send(findProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });        
    }
};

// set inactive for one product
exports.setProductStatus = async (req, res) => {
    const id = req.params.id;
    try {
        const findProduct = await Product.productModel.findById(id);
        const productStatus = findProduct.status;
        
        const result = await Product.productModel.findByIdAndUpdate(id, { status: !productStatus} );
        res.send(result);
    } catch (error) {
        res.status(404).json({ message: error.message });    
    }
};

// delete a product
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const findProduct = await Product.productModel.findByIdAndDelete(id);
        res.send("successfully deleted!!");
    } catch (error) {
        
    }
};