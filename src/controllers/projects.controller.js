import { project} from '../models/project.js'
import {task} from '../models/task.js'


export const getProjects=async (req,res) =>{
    try {
           const projects= await project.findAll()
           res.status(200).json(projects)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
}


export const getProject=async(req,res)=>{
    try {
        const{id}=req.params;

        const uniqueProject= await project.findOne({
            where:{
                id:id
            }
        })

      if(!uniqueProject) 
       return res.status(404).json({message:'Project does not exist!!'})

        res.status(200).json(uniqueProject)

    } catch (error) {
       return res.status(500).json({message: error.message})
    }
}

export const createProject=async (req,res) =>{
   const {name, priority,description}=req.body
    try {
        const newProject = await project.create({
            name,
            description,
            priority
           })
           res.status(201).json([{message:'User created!'},newProject])
    } catch (error) {
     
      return  res.status(500).json({message: error.message})
    }
}

export const updateProject= async(req,res)=>{
    try {
        const{id}=req.params;
             
        const projectD= await project.findByPk(id)
        projectD.set(req.body)
          
        if(!projectD)
          return res.status(400).json({message:`Project with id ${id} doesnt exist!`})
      
        await projectD.save()
      
        res.status(201).json([{message:'Project Updated!'},{projectD}])
    } catch (error) {
     return res.status(500).json({message: error.message})  
    }

}


export const deleteProject= async(req,res)=>{
    const {id }= req.params;
 try {
     await project.destroy({
        where:{
            id:id
        }
    });
    res.status(204).json({message:`User with id ${id} are deleted!`})
 } catch (error) {
    return res.status(500).json({message:error.message})
 }
}


export const getProjectTasks= async (req,res)=>{
     const {id}=req.params;
     
    const TaskProjects= await task.findAll({
        where:{
            ProjectId:id
        }
     })
   
     if(!TaskProjects)
     return res.status(400).json({message:`The user with id ${id} not have Task to do!`})

 res.status(200).json(TaskProjects)
}