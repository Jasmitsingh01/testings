import mongoose,{Schema}  from "mongoose";
import bcryt from 'bcrypt';
import jwt from 'jsonwebtoken';
const UserShecma= new Schema (
    {
     
        FullName:{
            type:String,
            required:true,
            lowercase:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            index:true,
        },
        Password:{
            type:String,
            required:true,
            lowercase:true,
        },
        refreshToken:{
            type:String,
        },
    },{
        timestamps:true,
    }
);

UserShecma.pre('save',async function(next){
    if(!this.isModified('Password')) return next();
    
    this.Password= await bcryt.hash(this.Password,10); // Hashing The Password on Save the Data
     next();
})



UserShecma.method.isPasswordTrue= async  function(Password){
  return await bcryt.compare(Password,this.Password);  // Checking Password is correct or not
}

UserShecma.method.accessToken =  function (){  // Authencation the User
   return  jwt.sign(
        {
        _id:this._id,
        username:this.username,
        FullName:this.FullName,
        email:this.email

    },
    process.env.JwT_secert_AceessTOken
    ,
    {
     expiresIn:process.env.JwT_secert_AceessTOken_Time
    }
    
    )
}

UserShecma.method.refershToken =  function (){
    return  jwt.sign(
         {
         _id:this._id,
         username:this.username,
         FullName:this.FullName,
         email:this.email
 
     },
     process.env.JwT_secert_RefressToken
     ,
     {
      expiresIn:process.env.JwT_secert_RefressToken_Time
     }
     
     )
 }

export const user=mongoose.model('users',UserShecma)