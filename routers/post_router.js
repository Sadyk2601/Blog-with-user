const express = require("express");
const router = express.Router();
let postRouter = require("../controllers/post_controller");
router.route("/").get(postRouter.findAllPosts).post(postRouter.addPost);
router
  .route("/:id")
  .get(postRouter.findPostById)
  .put(postRouter.updatePostById)
  .delete(postRouter.deletePost);
module.exports = router;
