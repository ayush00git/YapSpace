const mongoose = require("mongoose")
const { createHmac, randomBytes } = require("crypto")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    profileImageURL: {
        type: String,
        default: '/images.profile.png'
    }
}, {timestamps: true})

userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")){return}

    const salt = randomBytes(16).toString()
    const hashedPassword = createHmac("sha-256", salt).update(user.password).digest("hex")

    this.password = hashedPassword
    this.salt = salt

    next()
})

userSchema.static("matchPassword", async function (name, password) {
    const user = await this.findOne({ name })
    if(!user){
        throw new Error(`Username is not registered, signup first`)
    }
    const salt = user.salt
    const hashedPassword = user.password

    const userProvHash = createHmac("sha-256", salt).update(password).digest("hex")

    if(hashedPassword !== userProvHash){
        throw new Error(`Password didn't matched`)
    }
    return user
})

const User = mongoose.model("users", userSchema)

module.exports = User