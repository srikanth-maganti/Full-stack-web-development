import express from "express"
import { getNoteById ,getNotes,createNote,updateNote, deleteNote} from "../controllers/note.controllers";

const router =express.Router();

router.get("/",getNotes);
router.get("/:noteId",getNoteById)
router.post("/create",createNote);
router.post("/update",updateNote);
router.get("/delete",deleteNote)

export default router;