import express from "express"
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/task.controllers";

const router =express.Router();

router.get("/",getTasks)
router.get("/taskId",getTaskById)
router.post("/create",createTask);
router.post("/update",updateTask)
router.get("/delete",deleteTask)


export default router;