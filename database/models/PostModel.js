const mongoose = require('mongoose');
const PostSchema = require('../schemas/PostSchema');

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;