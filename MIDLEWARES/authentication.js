let jwt=require("jsonwebtoken")
let Authentication=(req,res,next)=>{
    try{
      console.log()
    let token=req.header.autherization
    let verified=jwt.verify(token,"code")
    next()
    }
    catch(error){
       console.log(error)
    }
 
 }
 module.exports=Authentication