const express = require("express");
const router = express.Router();
const userController = require("../../Downloads/todo-api-main/controllers/userController");

/* GET users listing. */
router.get("/", userController.index);

module.exports = router;
