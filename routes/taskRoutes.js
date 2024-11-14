const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { addTask, getTasks, deleteTasks } = require("../controllers/taskController");

router.post("/", authMiddleware, addTask);
router.get("/", authMiddleware, getTasks);
router.delete("/:id", authMiddleware, deleteTasks);

module.exports = router;