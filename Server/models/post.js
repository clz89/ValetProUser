const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    article: String,
}, { timestamps: true });

const post = mongoose.model('post', postSchema);

module.exports = post;