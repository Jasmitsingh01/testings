import mongoose,{Schema} from "mongoose";


const ProductSchema=new Schema(
    {
        ProductName:{
            type:String,
            required:true,
            lowercase:true,
        },
        Price:{
            type:Number,
            required:true,

        },
        ProductImage:{
            type:String,
            required:true,
        },
       owner:{
          type:mongoose.Types.ObjectId,
          ref:'users'
       }
    },{
        timestamps:true,
    }
)

const Product=mongoose.model('Products',ProductSchema);