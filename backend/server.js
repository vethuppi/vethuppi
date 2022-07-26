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

app.use("/", authRoutes);
app.use("/admin/users", userRoutes);
app.use("/admin/products", productRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});