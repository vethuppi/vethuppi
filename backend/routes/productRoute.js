const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.post("/addproduct", productController.newProduct);
router.get("/", productController.getAllproducts);

module.exports = router;