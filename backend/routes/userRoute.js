const express = require("express");

const userControllers = require("../controllers/userController");

const router = express.Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUser);

router.patch("/edit/:id", userControllers.setUserStatus);

module.exports = router;