// builtin modules
const cloudinary = require('../middleware/cloudinary');
const {tokenValidator} = require("../middleware/token");

// Models
const Product = require('../models/productSchema');
const User = require("../models/userSchema");

// create new product
exports.newProduct = async (req, res) => {
    try {

        const {jwt} = req.cookies;
        const valid = await tokenValidator(jwt);
        const phone_no = await valid.phone_no;
        const findUser = await User.userModel.findOne({phone_no: phone_no});
        const user_id = findUser._id;

        const utcTimeStamp = new Date().getTime();
        const result = await cloudinary.uploader.upload(req.file.path, {folder: 'vethuppi'}, use_filename => true, unique_filename => false);

        const product = new Product.productModel({
            title: req.body.title,
            desc: req.body.desc,
            img: {
                public_id: result.public_id,
                secure_url: result.secure_url,
            },
            price: req.body.price + ".00",
            shop: req.body.shop,
            publisher: user_id,
            status: true,
            created_datetime: utcTimeStamp,
            updated_datetime: utcTimeStamp,
            isDeleted: false,
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
        const findProducts = await Product.productModel.aggregate([
            { $match: { isDeleted: { $eq: false } } }, 
        ]);
        res.status(200).json(findProducts);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
};

// get one product details route
exports.getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const findProduct = await Product.productModel.findById(id);
    
        res.send(findProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });        
    }
};

// edit one product
exports.editProduct = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
      const result = await Product.productModel.findByIdAndUpdate(id, update);
      res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// set inactive(status) for one product (show on user panel)
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

// set isDeleted for one product
exports.setProductDeleted = async (req, res) => {
    const id = req.params.id;
    try {
        const findProduct = await Product.productModel.findById(id);
        const productDeleted = findProduct.isDeleted;
        const result = await Product.productModel.findByIdAndUpdate(id, { isDeleted: !productDeleted });
        res.send(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// delete a product
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteProduct = await Product.productModel.findByIdAndDelete(id);
        res.send("successfully deleted!!");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};