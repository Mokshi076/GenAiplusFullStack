const express = require('express')
const authController = require("../controllers/auth.controller")
const router  = express.Router()
// const passport = require("../config/passport");
const jwt = require("jsonwebtoken");
const authMiddleWare = require("../middlewares/auth.middleware") 

// /**
//  * @route POST /api/auth/register
//  * @description Register a new user
//  * @access Public
//  */

// Email Auth
router.post("/register", authController.registerUserController)
router.post("/login",  authController.loginUserController);
router.get("/logout", authController.logoutUserController);
router.get("/get-me", authMiddleWare.authUser, authController.getmeUserController);

module.exports = router;
