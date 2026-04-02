const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const tokenBlackListModel = require("../models/blacklist.model")


// Generate JWT
const generateToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  /**
 * @name registerUserController
 * @description Register a new user, expects username, email, and password 
 * @access Public
 */
async function registerUserController(req, res) {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Please provide username, email, and password" });
        }

        const isUserAlreadyExists = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (isUserAlreadyExists) {
            return res.status(400).json({ message: "User already exists with this username or email" });
        }

        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        });

        // Use your helper function
        const token = generateToken(user);

        // Set Cookie (HttpOnly is recommended for security)
        res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

        return res.status(201).json({
            success: true,
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
/**
 * @name loginUserController
 * @description Register a new user, expects username, email, and password 
 * @access Public
 */
async function loginUserController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // 1. Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // 2. Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // 3. Generate token
        const token = generateToken(user);

        res.cookie("token", token, { httpOnly: true });

        return res.status(200).json({
            success: true,
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
async function logoutUserController (req,res){

  try{
    const token = req.cookies.token

    if(token){
       await tokenBlackListModel.create({ token })
    }
    res.clearCookie("token")

    res.status(200).json({
      message : "user logged out sucessfully"
    })

  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }

};
async function getmeUserController(req,res){
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        user:{
            id : user._id,
            username: user.username,
            email: user.email
        }
    })
}

module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
    getmeUserController
}
