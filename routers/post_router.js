const express = require("express");
const router = express.Router();
const multer = require("multer");
let postRouter = require("../controllers/post_controller");
let path = require("path");

let storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 100 },
  fileFilter: (req, file, cb) => {
    let extraname = path.extname(file.originalname);
    if ([".jpg", ".png"].includes(extraname)) {
      cb(null, true);
    } else {
      cb(new Error("It is wrong type!!!"));
    }
  },
});

router
  .route("/")
  .get(postRouter.findAllPosts)
  .post(upload.array("image"), postRouter.addPost);
router
  .route("/:id")
  .get(postRouter.findPostById)
  .put(postRouter.updatePostById)
  .delete(postRouter.deletePost);
module.exports = router;
