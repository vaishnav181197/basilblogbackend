const mongoose = require('mongoose');


const Post = mongoose.model('Post',{
    title:String,
    content:String,
    username:String
});

module.exports = Post;


