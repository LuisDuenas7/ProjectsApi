import app from './app.js'
import {sequelize} from './database/database.js'
import './models/project.js'
import './models/task.js'

async function main () {
try{
  //await sequelize.authenticate();
  //await sequelize.sync({alter:false});
  console.log('Connection has been established succesfully.')
  app.listen(8010)
  console.log('Server runnig in port 8010')
}
catch (error){
  console.log('Unable to connect to the database', error);
}
}

main();