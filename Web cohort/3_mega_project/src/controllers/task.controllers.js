import {Task} from "../models/task.models.js"
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js"

const getTasks=asyncHandler(async(req,res)=>{
    const {projectId}=req.params;
    if(!projectId)
    {
        throw new ApiError(400,'Invalid data');
    }
    const tasks=await Task.findMany({project:projectId});
    if(!tasks || tasks.length==0)
    {
        throw new ApiError(400,'Tasks not found');
    }

    res.status(200).json(new ApiResponse(200,"tasks found successfully",tasks));
})

const getTaskById=asyncHandler(async(req,res)=>{
    const {taskId}=req.params;
    if(!taskId)
    {
        throw new ApiError(400,"Invalid data");
    }

    const task=await Task.findById(taskId);

    if(!task)
    {
        throw new ApiError(400,"task not found");
        
    }

    res.status(200).json(new ApiResponse(200,"task found successfully",task));
})

const createTask=asyncHandler(async(req,res)=>{
    const {title,description,projectId,assignedTo}=req.body;
    if(!title || !projectId || !assignedTo)
    {
        throw new ApiError(400,"Invalid data");
    }
    const options={
        title,
        description,
        project:new mongoose.Schema.Types.ObjectId(projectId),
        createdBy:new mongoose.Schema.Types.ObjectId(req.user.userId),
        assignedTo:new mongoose.Schema.Types.ObjectId(assignedTo),

        
    }
    const task=await Task.create(options);
    if(!task)
    {
        throw new ApiError(
            400,
            "unable to create a task"
        )
    }

    res.status(200).json(new ApiResponse(200,"Task created sucessfully",task));
})

const updateTask=asyncHandler(async(req,res)=>{
    const {taskId,title,description,status}=req.body;
    if(!taskId)
    {
        throw new ApiError(400,"invalid data");
    }
    const task=await Task.findById(taskId)
    if(!task)
    {
        throw new ApiError(400,"Task not Found");
    }
    if(title){
        task.title=title;
    }
    if(description)
    {
        task.description=description;
    }
    if(status)
    {
        task.status=status;
    }

    await task.save();

    res.status(200).json(new ApiResponse(200,"Task Updated Successfully",task));

})

const deleteTask=asyncHandler(async(req,res)=>{
    const {taskId}=res.params;
    if(!taskId)
    {
        throw new ApiError(400,"Invalid data");
    }

    const task=await Task.findByIdAndDelete(taskId);
    if(!task)
    {
        throw new ApiError(400,"Task not found")
    }

    res.status(200).json(new ApiResponse(200,"task deleted successfully",task))
})

export {getTaskById,getTasks,createTask,deleteTask,updateTask}