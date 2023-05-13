const { JsonWebTokenError } = require("jsonwebtoken")
let register=require("../MODELS/userReg")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
let reg=async(req,res)=>{
   try{
   let data=req.body

 let {user_Name,email,password,confirmPassword,phone}=req.body
 if (user_Name&&email&&password&&confirmPassword){
   let pws=await bcrypt.hash(data.password,10)
   let confpwd=await bcrypt.hash(data.confirmPassword,10)
  let datas={...data,"password":pws,"confirmPassword":confpwd}
   let newUser=new register(datas)
   newUser.save()
res.json({"msg":"Registation success"})
 }
 else{
res.json({"msg":"Registation unsuccess"})
 }
}
catch(error){
   console.log(error)
}
}
/*login controller*/ 

let User_login=async(req,res)=>{
   try{
   let{email,password}=req.body
   let data= await register.findOne({email})
   if(data){
      let valid= await bcrypt.compare(password,data.password)
      if(valid){
            let token=jwt.sign({"email":email},"code")
            console.log(token)
            res.json({"msg":"login is successfull","token":token,"email":data.email,"roll":data.roll})
         }
      else{
         res.json({"msg":"invalid  user credentials"})
      }
   }
   else{
      res.json({"msg":"plese register before login"})
   }   
}
catch(err){
   console.log(err)
}
}
module.exports={reg,User_login}