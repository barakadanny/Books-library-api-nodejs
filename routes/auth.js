const express = require("express")
const authRoutes = express.Router();
const AuthController = require("../controllers/AuthController")

authRoutes
    .route("/auth/signup")
    .post(AuthController.signup)

authRoutes
    .route("/auth/login")
    .post(AuthController.login)

module.exports = authRoutes
