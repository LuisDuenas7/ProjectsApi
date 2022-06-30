import {DataTypes} from 'sequelize'
import { sequelize } from "../database/database.js";
import { task } from './task.js';

export const project = sequelize.define('project',{
id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
name:{
    type:DataTypes.STRING
},
priority:{
    type:DataTypes.INTEGER
},
description:{
    type:DataTypes.STRING
} 
},{
    timestamps:true
})


project.hasMany(task,{
  foreignKey:'ProjectId',
  sourceKey:'id'   
})

task.belongsTo(project,{
    foreignKey:'ProjectId',
    targetId:'id'  
})
