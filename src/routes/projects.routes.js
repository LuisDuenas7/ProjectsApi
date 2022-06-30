import {Router} from 'express'
import { createProject, getProjects,updateProject, deleteProject,getProject,getProjectTasks } from '../controllers/projects.controller.js'


const router= Router();

router.get('/projects',getProjects);
router.get('/projects/:id',getProject);
router.post('/projects', createProject);
router.put('/projects/:id',updateProject);
router.delete('/projects/:id',deleteProject);



router.get('/projects/:id/tasks',getProjectTasks);




export default router