import { Router } from "express";
import { RegisterUser } from "../controller/User.Controller";
const route=Router();


route.route('/').get((req,res)=>{
res.send('<h1>Welcome TO jasmit Backend</h1>')
})



export {route};