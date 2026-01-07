import asyncHandler from "../utils/asyncHandler"
import {Note} from "../models/note.models.js"
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getNotes=asyncHandler(async(req,res)=>{
    const {projectId}=req.params;
    if(!projectId)
    {
        throw new Error(400,"Invalid data");
    }

    const notes=await Note.findMany({project:projectId});
    if(!notes ||notes.length==0)
    {
        throw new Error(400,"No notes found");
    }

    res.status(200).json(new ApiResponse(200,"Notes fetched successfully",notes));

})

export const getNoteById=asyncHandler(async(req,res)=>{
    const {noteId}=req.params;
    if(!noteId)
    {
        throw new ApiError(400,"Invalid Data")
    }

    const note=await Note.findById(noteId);
    if(!note)
    {
        throw new ApiError(400,"Note not Found")
    }

    res.status(200).json(new ApiResponse(200,"Note fetched Successfully",data=note));
})


export const createNote=asyncHandler(async(req,res)=>{
    const {projectId,content}=req.body;
    if(!projectId || !content)
    {
        throw new ApiError(400,"Invalid Data");
    }
    const options={
        projectId:new mongoose.Schema.Types.ObjectId(projectId),
        createdBy:new mongoose.Schema.Types.ObjectId(req.user.userId),
        content
    }   
    const note=await Note.create(options)
    if(!note)
    {
        throw new ApiError(400,"Unable to create a Note");
    }

    res.status(200).json(new ApiResponse(200,"Note created Successfully",note));
})


export const updateNote=asyncHandler(async(req,res)=>{
    const {noteId,content}=req.params;
    if(!noteId)
    {
        throw new ApiError(400,"Invalid data");
    }
    const note=await Note.findByIdAndUpdate(noteId,{content});
    if(!note)
    {
        throw new ApiError(400,"Note not found");
    }
    res.status(200).json(new ApiResponse(200,"Note updated successfully",note));
})


export const deleteNote=asyncHandler(async(req,res)=>{
    const {noteId}=req.params;
    if(!noteId)
    {
        throw new Error(400,"Invalid data");
    }

    const note=await Note.findByIdAndDelete(noteId);
    if(!note)
    {
        
        throw new Error(400,"Note not found");
    }
    res.status(200).json(new ApiResponse(200,"Note deleted successfully",note));

    
})