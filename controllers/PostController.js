const PostModel = require('../database/models/PostModel');

async function index(req, res) {
  try {
    const posts = await PostModel.find()
    return res.json(posts);
  } catch (err) {
    console.log(err)
    return res.json(err);
  }
};

async function show(req, res) {
  const {id} = req.params
  try {
    const post = await PostModel.findById(id);
    return res.json(post)
  } catch (err) {
    return res.json(err);
  }

};

async function create(req, res) {
  const {organisation, title, content} = req.body;
  try {
    const post = new PostModel({
      organisation,
      title,
      content
    });
    await post.save();
    return res.json(post);
  } catch (err) {
    return res.json(err);
  }
};

async function update(req, res) {
  const {title, content} = req.body;
  const {id} = req.params;
  try {
    const post = await PostModel.findById(id)
    post.title = title;
    post.content = content;
    await post.save();
    return res.json(post);
  } catch (err) {
    return res.json(err);
  };
};

async function destroy(req, res) {
  const {id} = req.params;
  try {
    await PostModel.findByIdAndDelete(id);
    return res.send('Success');
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
