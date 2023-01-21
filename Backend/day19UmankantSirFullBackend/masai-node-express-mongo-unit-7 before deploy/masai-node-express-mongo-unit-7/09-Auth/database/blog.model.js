const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        minLength: 10
    },
    author: { // user has many blogs
        _id: String,
        name: String,
        iamge: String,
    }
}, {
    timestamps: true
})

const blogModel = mongoose.model('blogs', blogSchema) // blogs

module.exports = blogModel;