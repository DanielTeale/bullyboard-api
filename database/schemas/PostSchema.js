const {Schema} = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  organisation: {
    type: Schema.Types.ObjectId,
    ref: "Organisation",
    required: true
  }
});

module.exports = PostSchema;