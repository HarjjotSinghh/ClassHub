const express = require("express")
const { authenticate } = require("../middlewares/auth")
const {getAllTasks, createTask, getTaskByID} = require("../controllers/task")
const router = express.Router()

router.get("/", getAllTasks)
router.get("/:taskID", getTaskByID)
router.post("/create", authenticate, createTask)

module.exports = router