const express = require("express");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");

const connectDB = require("./config/db"); // Database configuration

const app = express();
dotenv.config();

connectDB(); // Database Connection

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Routes
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const upload = require("./routes/upload");

const authVerify = require("./helpers/authVerify");

app.use("/", authRoutes);
app.use("/admin/users", authVerify, userRoutes);
app.use("/admin/products", authVerify, productRoutes);
app.use("/admin", authVerify, upload);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});