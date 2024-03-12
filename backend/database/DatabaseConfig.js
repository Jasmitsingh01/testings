import mongoose from "mongoose"

 const connection= async()=>{
   try {
   const connectionDb= await mongoose.connect(process.env.MONGODB_URL);
   } catch (error) {
     console.error('ERROR :: MONGODBERRoR',error)
     process.exit(1)
   }
}

export default connection;