const express = require('express')
const authController = require("../controllers/auth.controller")
const router  = express.Router()
// const passport = require("../config/passport");
const jwt = require("jsonwebtoken");
const authMiddleWare = require("../middlewares/auth.middleware") 



// Email Auth
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", authController.registerUserController)
/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */
router.post("/login",  authController.loginUserController);
/**
 * @route GET /api/auth/logout
 * @description Remove token and add to balcklist
 * @access Public
 */
router.get("/logout", authController.logoutUserController);
/**
 * @route POST /api/auth/getme
 * @description user profile
 * @access Private
 */
router.get("/get-me", authMiddleWare.authUser, authController.getmeUserController);

module.exports = router;
