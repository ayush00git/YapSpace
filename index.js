const express = require("express")
const app = express()
const {connectMongo} = require("./connection")
const path = require("path")
const PORT = 8000
const userRouter = require("./routes/user")
const {checkForAuthorization} = require("./middlewares/auth")
const cookieParser = require("cookie-parser")

connectMongo("mongodb://127.0.0.1:27017/YapSpace")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(`Mongo Error: ${err}`))

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(checkForAuthorization)

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use("/user", userRouter)


app.get('/', (req, res) => {
    res.render("home", {
        user: req.user
    })
})

app.listen(PORT, () => console.log(`Server started at - http://localhost:${PORT}`))