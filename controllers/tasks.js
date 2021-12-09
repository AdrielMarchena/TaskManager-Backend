const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const {CreateIdNotFoundError} = require("../error/id-not-found");

const getAllTasks = asyncWrapper(async (request,response,next) =>
{
    const allTasks = await Task.find({});
    response.status(200).json({allTasks,amount:tasks.length});
});

const createTask = asyncWrapper(async (request,response,next) =>
{
    const task = await Task.create(request.body)
    response.status(201).json({task});
});

const getTask = asyncWrapper(async (request,response,next) =>
{
    const {id:taskID} = request.params;
    const task = await Task.findOne({_id:taskID});
    if(!task)
    {
        return next(CreateIdNotFoundError(`No task with id: ${taskID}`,404));
    }
    response.status(200).json({task});
});

const updateTask = asyncWrapper(async (request,response,next) =>
{
    const {id:taskID} = request.params;
    const updatedTask = request.body;

    const task = await Task.findOneAndUpdate({_id:taskID},updatedTask,{new:true,runValidators:true});
    if(!task)
    {
        return next(CreateIdNotFoundError(`No task with id: ${taskID}`,404));
    }
    response.status(200).json({task});
});

const deleteTask = asyncWrapper(async (request,response,next) =>
{
    const {id:taskID} = request.params;

    const task = await Task.findOneAndDelete({_id:taskID});
    if(!task)
    {
        return next(CreateIdNotFoundError(`No task with id: ${taskID}`,404));
    }
    response.status(200).json({task:null,msg:"success"});
});

module.exports = 
{
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}