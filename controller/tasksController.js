const express = require("express")


//get all tasks
const  getAllTasks = (req,res)=>{

res.send("all items🚀")

}
//get tasks
const  getTasks = (req,res)=>{

res.json({id:req.params.id})

}
//create all tasks
const  createTasks = (req,res)=>{

res.json(req.body)

}
//update all tasks
const  updateTasks = (req,res)=>{

res.send("patch🚀")

}
//delete all tasks
const  deleteTasks = (req,res)=>{

res.send("all delete🚀")

}



module.exports={getAllTasks,createTasks,updateTasks,deleteTasks,getTasks};