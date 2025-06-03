const express = require("express")
const Blog = require("../models/blog")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const fs = require("fs")
const Comment = require("../models/comment")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadPath = path.resolve(`./public/uploads/${req.user.name}-${req.user._id}`)
        fs.mkdirSync(uploadPath, {recursive: true} )
        return cb(null, uploadPath)
    },
    filename: function(req, file, cb) {
        const filename = `${file.originalname}`
        return cb(null, filename)
    }
})

const fileFilter = function(req, file, cb){
    const allowedTypes = [".png", ".jpg", ".jpeg"]
    const ext = path.extname(file.originalname).toLowerCase()
    if(!allowedTypes.includes(ext)){
        return cb(new Error(`Files must be of format .jpg, .png or .jepg`))
    }
    cb(null, true)
}

const upload = multer({storage, fileFilter})

router.post('/addBlog', upload.single('coverImageURL') , async (req, res) => {
    const { content, title } = req.body
    const blog = await Blog.create({
        title,
        content,
        coverImageURL: req.file ? `uploads/${req.user.name}-${req.user._id}/${req.file.filename}` : undefined,
        createdBy: req.user._id
        
    }) 
    return res.redirect(`/blog/${blog._id}`)
})


router.get('/addBlog', async(req, res) => {
    if(!req.user){
        return res.redirect("/user/signup")
    }
    return res.render("blog", {
        user: req.user
    })
})



router.use(express.static(path.resolve('./public'))) 
router.get('/:id', async(req, res) => {
    const blog = await Blog.findById(req.params.id).populate("createdBy")
    const comment = await Comment.find({blogId: req.params._id}).populate("createdBy")
    return res.render("blogId", {
        blog,
        user: req.user,
        comment
    })
})

router.post('/comment/:id', async(req, res) => {
    await Comment.create({
        comment: req.body.comment,
        blogId: req.params.id,
        createdBy: req.user._id
    })
    return res.redirect(`/blog/${req.params.id}`)
})



module.exports = router