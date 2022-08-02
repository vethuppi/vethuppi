const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.post("/addproduct", productController.newProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);
router.patch("/edit/:id", productController.editProduct);
router.patch("/status/:id", productController.setProductStatus);
router.patch("/delete/:id", productController.setProductDeleted);
// router.delete("/:id", productController.deleteProduct);

module.exports = router;