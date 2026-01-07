import {Project} from "../models/project.models.js"
import { ProjectMember } from "../models/projectmember.models.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"


export const getProjects=asyncHandler(async(req,res)=>{
    const projects=await Project.findMany({});
    if(!projects || projects.length==0)
    {
        throw new ApiError(400,"Projects not found");
    }

    res.status(200).json(new ApiResponse(200,"projects fetched successfully",data=projects))

})

export const getProjectById=asyncHandler(async(req,res)=>{
    const {projectId}=req.params;
    if(!projectId)
    {
        throw new ApiError(400,"Invalid project");
    }

    const project=await Project.findById(projectId);
    if(!project)
    {
        throw new ApiError(400,"project not found");
    }

    res.status(200).json(new ApiResponse(200,"Project fetched successfully",project));

})


export const createProject=asyncHandler(async (req,res)=>{
    const {title,description=""}=req.body;
    if(!title)
    {
        throw new ApiError(400,"Project title is required");
    }

    const user=req.user;
    if(!user)
    {
        throw new ApiError(400,"Unauthorized access");
    }

    const project=await Project.create({title,description,user:user.user_id});
    if(!project)
    {
        throw new ApiError(400,"Unable to create a project");
    }

    await project.save();
    res.status(200).json(new ApiResponse(200,"Project created successfully"));
})

export const updateProject=asyncHandler(async(req,res)=>{
    const {projectId,name,description}=req.body;
    if(!projectId)
    {
        throw new ApiError(400,"Invalid project");
    }
    const project=await Project.findById(projectId);
    if(!project)
    {
        throw new ApiError(400,"project not found");
    }

    if(!name)
    {
        project.name=name;
    }
    if(!description)
    {
        project.description=description;
    }

    await project.save();
    res.status(200).json(new ApiResponse(200,"Project Updated successfully",data=project));
    
})

export const deleteProject=asyncHandler(async(req,res)=>{
    const {projectId}=req.params;
    if(!projectId)
    {
        throw new ApiError(400,"Invalid project");
    }
    const project=await findOneAndDelete({_id:projectId});
    if(!project)
    {
        throw new ApiError(400,"project not found");
    }
    res.status(200).json(new ApiResponse(200,"Project deleted successfully",project));
})



export const getProjectMembers=asyncHandler(async(req,res)=>{
    const {projectId}=req.params;
    if(!projectId)
    {
        throw new ApiError(400,"Invalid project");
    }
    const projectmembers=await ProjectMember.findMany({project:projectId}).select("-project").populate();
    if(!projectmembers)
    {
        throw new ApiError(400,"No project members found");

    }

    res.status(200).json(new ApiResponse(200," fetched Project members",projectmembers));


})


export const addMemberToProject=asyncHandler(async(req,res)=>{
    const {userId,projectId,role}=req.body;
    if(!userId || !projectId )
    {
        throw new ApiError(400,"Insufficient data");
    }

    const member=await ProjectMember.create({user:new mongoose.Schema.Types.ObjectId(userId),project:new mongoose.Schema.Types.ObjectId(projectId),role});

    if(!member)
    {
        throw new ApiError(400,"Unable to creaate Member");
    }

    res.status(200).json(new ApiResponse(200,"Member added to Project successfully"));


})

export const updateProjectMember=asyncHandler(async (req,res)=>{
     const {memberId,role}=req.body;
    if(!memberId  || !role)
    {
        throw new ApiError(400,"Insufficient data");
    }

    const member=await ProjectMember.findById(memberId);

    if(!member)
    {
        throw new ApiError(400,"Unable to update Member");
    }
    member.role=role;
    await member.save();
    res.status(200).json(new ApiResponse(200,"Member added to Project successfully"));
})

export const removeMemberFromProject=asyncHandler(async(req,res)=>{
    const {memberId}=req.params;
    if(!memberId)
    {
        throw new ApiError(400,"insufficient data");
    }
    const member=await ProjectMember.findOneAndDelete({_id:memberId});

    if(!member)
    {
        throw new ApiError(400,"Member not found");
    }

    res.status(200).json(200,"Project member removed from the project successfully")

})

