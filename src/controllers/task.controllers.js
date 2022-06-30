import { task } from "../models/task.js";

export const getTasks= async(req,res)=>{
    try {
         const tasks= await task.findAll()
         res.status(200).json(tasks)
    } catch (error) {
         return res.status(500).json({message: error.message})
    }
}
export const getTask= async(req,res)=>{
    try {
        const {id}=req.params;

        const singleTask= await task.findOne({
            where:{
                id:id
                //attributes:['name','ProjectId'] si necesitamos filtrar lo que retorna
            }
        })
       
        if(!singleTask)
         return res.json({message:`User with id ${id} doesnt exist!`})

        res.status(200).json(singleTask)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const createTask= async(req,res)=>{
    const{name,done,ProjectId}=req.body;
    try {
        const createTask= await task.create({
           name,
           done,
           ProjectId
        })
        res.status(201).json([{message:'Task are created!'},createTask])
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const updateTask= async(req,res)=>{
    try {
        const{id}= req.params;
        

        const TaskToUpdate= await task.findByPk(id)
        TaskToUpdate.set(req.body);
       
        if(!TaskToUpdate)
         return res.status(400).json({message:`Task with id ${id} doesnt exist!`})
        
        await TaskToUpdate.save()
        
        res.status(202).json([{message:`Task with id ${id} are Updated!`},TaskToUpdate]) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const deleteTask= async(req,res)=>{
    try {
       const{id}= req.params;
      
       const deleteTask= await task.destroy({
        where:{
            id:id
        }
       })
      res.status(204).json({messae:`Task with id ${id} are deleted!`})
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
