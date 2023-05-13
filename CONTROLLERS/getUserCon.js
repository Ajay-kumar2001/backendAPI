let register=require("../MODELS/userReg")
let getUserCon=async(req,res)=>{
    let data=await register.find()
    res.json(data)
}
module.exports=getUserCon