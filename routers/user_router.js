const express = require("express");
const router = express.Router();
const userRouter = require("../controllers/user_controller");

router.route("/").get(userRouter.findUsers).post(userRouter.addUser);
router.route("/:id").get(userRouter.findUserById).delete(userRouter.deleteUser);

module.exports = router;
