const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");

const connectDB = require("./config/db"); // Database configuration

const app = express();
dotenv.config();

connectDB(); // Database Connection

app.use(express.json());
app.use(cookieParser());

// Routes
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");

const authVerify = require("./helpers/authVerify");

app.use("/", authRoutes);
app.use("/admin/users", authVerify, userRoutes);
app.use("/admin/products", authVerify, productRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});