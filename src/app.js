const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Import middleware
const adminAuthorization = require("./middleware/adminAuthorization");

// Initialize Express app
const app = express();

// Load environment variables
dotenv.config();


// Middleware setup
app.use(express.json());
app.use(cors());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello there!");
});

// Import controllers
const authController = require("./auth/auth.controller");
const userController = require("./user/user.controller");
const itemController = require("./item/item.controller");
const transactionController = require("./transaction/transaction.controller");

app.use("/api/auth", authController);
app.use("/api/users", adminAuthorization, userController);
app.use("/api/items", itemController);
app.use("/api/transactions", transactionController);

module.exports = app;