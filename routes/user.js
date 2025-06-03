const express = require("express")
const router = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const { createToken } = require("../services/auth")

//signup
router.post("/signup", async(req, res) => {
    const { name, email, password } = req.body
    await User.create({name, 
        email, 
        password
    })
    return res.redirect('/user/login')

})

router.get("/signup", async(req, res) => {
    return res.render("signup")
})
// 

//login
router.post("/login", async(req, res) => {
    const { email, password } = req.body
    
    const foundUser = await User.matchPassword(email, password)
    if(!foundUser){
        return res.send("Invalid Email or password")
    }

    const token = createToken(foundUser)
    res.cookie("token", token)
    return res.redirect('/')
})

router.get("/login", async(req, res) => {
    return res.render("login")
})

router.get("/logout", async(req, res) => {
    return res.clearCookie("token").redirect('/user/login')
})


module.exports = router