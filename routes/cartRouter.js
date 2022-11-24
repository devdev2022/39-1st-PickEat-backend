const express = require("express");

const cartController = require("../controllers/cartController");
const { loginRequired } = require("../utils/checkUser");

const router = express.Router();

router.post("/:productId", loginRequired, cartController.addCart);

module.exports = router;