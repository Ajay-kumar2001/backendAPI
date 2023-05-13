let mongoose= require("mongoose")
let user_schema=new mongoose.Schema({
    
    user_Name:{
        type:String,
        require:true,
       
    },
    email:{
        type:String,
        require:true,
        unique:true,
        
    },
    password:{
        type:String,
        require:true,
    
    },
    confirmPassword:{
         type:String,
        require:true,
        
    },
    phone:{type:String},
    roll:{
        type:String,
        default:"user"
    }
})
module.exports=mongoose.model("registers",user_schema)