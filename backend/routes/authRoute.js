const express = require("express");
const multer = require("multer")

const router = express.Router();
const multerOpt = multer();

const authControllers = require("../controllers/authController");

router.post("/signup", multerOpt.none(), authControllers.signup);
router.post("/signin", multerOpt.none(), authControllers.signin);

module.exports = router;