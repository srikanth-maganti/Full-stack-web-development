import {body} from "express-validator"

function userRegiserValidator(){
    return [
        body("email").isEmail().trim(),
        body("fullname").isEmpty().isAlpha().trim(),
        body("password").isEmpty()
    ]
}

function userLoginValidator()
{
    return[]
}

function resendEmailVerificationValidator()
{
    return[]
}

function forgotPasswordValidator()
{
    return [];
}

function resetForgotPasswordValidator()
{
    return [];
}

function createProjectValidator()
{
    return [];
}

function updateProjectValidator()
{
    return [];
}

function addMemberToProjectValidator()
{
    return [];
}

function updateMemberValidator()
{
    return [];
}

function createTaskValidator()
{
    return [];
}

function updateTaskValidator()
{
    return [];
}

function createNoteValidator()
{
    return [];
}
function updateNoteValidator()
{
    return [];
}