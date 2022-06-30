import express from "express";
import projectRoutes from './routes/projects.routes.js'
import taskRoutes from './routes/task.routes.js'

const app= express();


//middlewares
app.use(express.json())



app.use(projectRoutes)
app.use(taskRoutes)

//Welcome Api rest page
app.get('/',(req,res)=>{
    res.send('<div style="text-align:center" ><h1>Welcome to Projects API</h1> <br><br>  <a href="http://localhost:8010/projects"> Link to Projects </a> <br><br> <a href="http://localhost:8010/tasks">Link to Tasks </a>  </div>')
})

export default app;