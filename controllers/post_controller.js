const Post = require("../modules/post_module");

let findAllPosts = async (req, res, next) => {
  let posts = await Post.find();
  res.status(200).json({ name: "Posts", posts });
};

let addPost = async (req, res, next) => {
  let data = req.body;
  let post = await Post.create({ ...data });
  await post.save();
  res.status(200).json({ name: "Post", post });
};

let findPostById = async (req, res, next) => {
  let id = req.params.id;
  let post = await Post.findById(id);
  if (post) {
    res.status(200).json({ name: "post", post });
  } else {
    res.status(404).json({ error: "No information" });
  }
};

let updatePostById = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  let post = await Post.findByIdAndUpdate(id, data, { new: true });
  res.status(200).json({ name: "post", post });
};

let deletePost = async (req, res, next) => {
  let id = req.params.id;
  await Post.findByIdAndDelete(id);
  res.status(204).json({ name: "post" });
};

module.exports = {
  findAllPosts,
  addPost,
  deletePost,
  findPostById,
  updatePostById,
};
