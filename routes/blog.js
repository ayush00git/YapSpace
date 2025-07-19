const express = require("express")
const Blog = require("../models/blog")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const fs = require("fs")
const Comment = require("../models/comment")
const cloudinary = require("cloudinary").v2
const { v4: uuidv4 } = require("uuid")
const sharp = require("sharp")

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const upload = multer({
    storage: multer.memoryStorage()
})
// cloudinary upload handler
router.post('/addBlog', upload.single('coverImageURL'), async(req, res) => {
    const { title, content } = req.body
    try{
        let coverImageURL = null
        let imageUid = null

        if(req.file){
            imageUid = uuidv4()

            const webpBuffer = await sharp(req.file.buffer)
            .rotate()
            .webp({quality: 80})
            .toBuffer();

            const result = await cloudinary.uploader.upload(`data:image/webp;base64,${webpBuffer.toString('base64')}`,
            {
                resource_type: "image",
                folder: `yap-thumbnails`,
                public_id: imageUid,
                format: "webp"
            })
            coverImageURL = result.secure_url
            
        }

        const blog = await Blog.create({
        title,
        content,
        coverImageURL,
        imageUid,
        createdBy: req.user._id
        
        }) 
        return res.redirect(`/blog/${blog._id}`)
    }
    catch(err){
        console.log(`${err.message}`)
    }
    
})

// post route for adding an blog
router.get('/addBlog', async(req, res) => {
    if(!req.user){
        return res.render("signup", {error: 'You need to have an account for writing an blog'})
    }
    return res.render("blog", {
        user: req.user
    })
})

// route for fetching the data for a user's blogs
router.get('/myBlog', async(req, res) => {
    const blogs = await Blog.find({createdBy: req.user._id}).sort({ createdAt: -1 })
    res.render("myBlog", {
        blogs,
        user: req.user
    })
})


router.use(express.static(path.resolve('./public'))) 

// route for details of a particular blog
router.get('/:id', async(req, res) => {
    const blog = await Blog.findById(req.params.id).populate("createdBy")
    const comments = await Comment.find({blogId: req.params.id}).populate("createdBy")
    return res.render("blogId", {
        blog,
        user: req.user,
        comments
    })
})

// post request for commenting on a blog
router.post('/comment/:id', async(req, res) => {
    if(!req.user){
        return res.render("signup", {error: 'Create an account to comment on a blog'})
    }
    await Comment.create({
        comment: req.body.comment,
        blogId: req.params.id,
        createdBy: req.user._id
    })
    return res.redirect(`/blog/${req.params.id}`)
})

// delete request for a user willing to delete a post
router.delete('/myBlog/:id', async(req, res) => {
    const blog = await Blog.findOneAndDelete({ 
        _id: req.params.id,
        createdBy: req.user._id
    })
})

module.exports = router