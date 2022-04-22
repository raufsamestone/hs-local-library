const express = require("express");
const router = express.Router();

const authView = require("../controllers/auth/view");
const authGetSignup = require("../controllers/auth/signup-get");
const authPostSignup = require("../controllers/auth/signup-post");
const authGetLogin = require("../controllers/auth/login-get");
const authPostLogin = require("../controllers/auth/login-post");
const authGetLogout = require("../controllers/auth/logout-get");

/* Signup Page */
router.get("/", authView);

// Signup Post
router.post("/signup", authPostSignup);

// Signup Get
router.get("/signup", authGetSignup);

// Login Post
router.post("/login", authPostLogin);

// Login Get
router.get("/login", authGetLogin);

// Logout
router.get("/logout", authGetLogout);

module.exports = router;
