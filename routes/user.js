const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { createToken } = require("../services/auth");

//signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await User.create({ name, email, password });
    return res.redirect("/user/login");
  } catch (err) {
    if(err.code === 11000){
      return res.render("signup", {error: 'Email already registered login instead'})      // in case of err.code = 11000 which is mongodb duplicated key error
  }}
});

router.get("/signup", async (req, res) => {
  return res.render("signup", {error: null});
});
//

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.matchPassword(email, password);
    const token = createToken(foundUser);
    res.cookie("token", token);
    return res.redirect("/");
  } catch (err) {
    res.render("login", { error: err.message });
  }
});

router.get("/login", async (req, res) => {
  return res.render("login", { error: null });
});

router.get("/logout", async (req, res) => {
  return res.clearCookie("token").redirect("/user/login");
});

module.exports = router;
