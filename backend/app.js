import  express from "express";
import cors from 'cors'
import { route } from "./routes/routes.js";
 const app=express();



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(route)

export {app}