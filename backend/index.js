import dotenv from 'dotenv'
dotenv.config({path:'./.env'})
import connection from "./database/DatabaseConfig.js";
import { app } from './app.js';
connection()
.then(()=>{
    app.listen(process.env.PORT,()=>{
       console.log(`Sever is running on ${process.env.PORT}`)
    })
    console.log('DATABASE CONNECTED SUCCESSFULLY')
})
.catch(()=>{
console.log('SERVER CHASED')
})