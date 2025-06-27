const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()
const {connectMongo} = require("./connection")
const path = require("path")
const PORT = process.env.PORT || 8000
const userRouter = require("./routes/user")
const {checkForAuthorization} = require("./middlewares/auth")
const cookieParser = require("cookie-parser")
const multer = require("multer")
const Blog = require("./models/blog")
const blogRouter = require("./routes/blog")

connectMongo(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(`Mongo Error: ${err}`))

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(checkForAuthorization)
app.use(express.static(path.resolve("./public")))
app.use(express.static(path.resolve("./views")))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use("/user", userRouter)
app.use("/blog", blogRouter)


app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({})
    res.render("home", {
        user: req.user,
        blogs: allBlogs
    })
})

app.listen(PORT, () => console.log(`Server started at - http://localhost:${PORT}`))