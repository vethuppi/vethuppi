const express = require("express");

const authControllers = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authControllers.signup);
router.post("/signin", authControllers.signin);

module.exports = router;