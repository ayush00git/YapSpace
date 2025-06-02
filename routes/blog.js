const express = require("express")
const Blog = require("../models/blog")
const router = express.Router()
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, path.resolve("./public/uploads"))
    },
    filename: function(req, file, cb) {
        const filename = `${Date.now()} - ${file.originalname}`
        return cb(null, filename)
    }
})

const upload = multer({storage})

router.post('/addBlog', upload.single('coverImageURL') , async (req, res) => {
    const { content, title } = req.body
    const blog = await Blog.create({
        title,
        content,
        coverImageURL: req.file ? `uploads/${req.file.filename}` : undefined,
        createdBy: req.user._id
    }) 
    return res.redirect(`/blog/${blog._id}`)
})


router.get('/addBlog', async(req, res) => {
    if(!req.user){
        return res.redirect("/user/signup")
    }
    return res.render("blog")
})


module.exports = router