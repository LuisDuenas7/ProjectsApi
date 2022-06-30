import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'Projects_DB',
    'academlo',
    'root',{
host:'localhost',
dialect:'postgres'
})