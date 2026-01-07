import express from "express"
import { addMemberToProject, createProject, deleteProject, getProjectById, getProjectMembers, getProjects, removeMemberFromProject, updateMember, updateProject } from "../controllers/project.controllers";

const router =express.Router();

router.get("/",getProjects)
router.get("/:projectId",getProjectById)
router.post("/create",createProject)
router.post("/update",updateProject);
router.get("/delete",deleteProject)
router.get("/getprojectmembers",getProjectMembers);
router.post("/addprojectmember",addMemberToProject);
router.post("/updateprojectmember",updateProjectMember);
router.get("/deletemember",removeMemberFromProject);

export default router;