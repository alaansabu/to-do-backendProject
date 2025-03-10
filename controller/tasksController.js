const express = require("express")
const Task = require("../models/tasksSchema")
const { default: mongoose } = require("mongoose")

//get all tasks
const  getAllTasks = async (req,res)=>{

try {

    const task =  await Task.find();

    if(!Task){

        return res.status(400).json({message:"not found"});
    }else{

return  res.status(200).json({ task })

    }
    
} catch (error) {
    

    res.status(500).json({message:"server error"})
    
}


}
//get tasks
const  getTasks = async (req,res)=>{



try {

const taskID = req.params.id;

if(!mongoose.Types.ObjectId.isValid(taskID)){

    return res.status(400).json({message:"validation error"});

}

const task = await Task.findById(taskID)
if(!task){
    return res.status(400).json({message:"task not dound"});
}
res.status(200).json({task})


} catch (error) {
    res.status(500).json({message:"error"})
    
}






}
//create all tasks
const createTasks = async (req, res) => {
    try {
        const { name, completed } = req.body;

        // Validate input (name is required)
        if (!name) {
            return res.status(400).json({ message: "Task name is required" });
        }

        // Create new task (completed defaults to false if not provided)
        const newTask = await Task.create({ name, completed });

        res.status(201).json({
            message: "Task created successfully",
            task: newTask
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
//update all tasks
const  updateTasks = async (req,res)=>{


    try {



        
        const taskID = req.params.id;

if(!mongoose.Types.ObjectId.isValid(taskID)){

    return res.status(400).json({message:"validation error"});
}
const updatetask = await Task.findByIdAndUpdate(taskID,req.body, {

new:true,
runValidators:true

})


if(!updatetask){
    return res.status(400).json({message:"task not found"});

}
res.status(200).json({message:"task succesfully added",
    task:updatetask})
        
    } catch (error) {
        
        res.status(500).json({message:"server error"})
    }


}
//delete all tasks
const  deleteTasks = async(req,res)=>{




try {
    

    const taskID = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(taskID)){
        return res.status(400).json({message:"task id is invalid"})
    
    }

    const deleTask = await Task.findByIdAndDelete(taskID)

    if(!deleTask){
        res.staus(404).json({message:"task not found"})
    }

    res.status(200).json({message:"deleted successfully"});


    
} catch (error) {

    res.status(500).json({message:"server error"})
}


}



module.exports={getAllTasks,createTasks,updateTasks,deleteTasks,getTasks};