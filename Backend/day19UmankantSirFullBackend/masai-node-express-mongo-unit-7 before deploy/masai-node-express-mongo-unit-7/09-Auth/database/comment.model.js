const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 10
    },
    author: { // user has many comments
        _id: String,
        name: String,
        image: String,
    },
    blogId: String
}, {
    timestamps: true
})

const commentsModel = mongoose.model('comments', commentSchema) // commentss

module.exports = commentsModel;