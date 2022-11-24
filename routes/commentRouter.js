const express = require("express");
const commentController = require("../controllers/commentController");
const { loginRequired } = require("../utils/checkUser");

const router = express.Router();

router.post(
  "/productId/:productid",
  loginRequired,
  commentController.createComment
);

router.get("/product/:productId", commentController.getCommentsByProductId);

module.exports = router;
