const express = require("express")
const authRoutes = express.Router();
const AuthController = require("../controllers/AuthController")

authRoutes
    .route("/auth/signup")
    .post(AuthController.signup)

module.exports = authRoutes
