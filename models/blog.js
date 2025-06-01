const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    blogId: {
        type: String,      
    },
    coverImageURL: {
        type: String,
        default: "/images/default.png"
    },
    createdBy: {
        type: String
    }
}, {timestamps: true})

const Blog = mongoose.model("blogs", blogSchema)

module.exports = Blog