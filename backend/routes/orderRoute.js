const express = require("express");

const orderControllers = require("../controllers/orderController");

const router = express.Router();

router.get("/", orderControllers.proceedOrder);

module.exports = router;