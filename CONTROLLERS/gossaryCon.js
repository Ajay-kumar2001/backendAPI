const products = require("../MODELS/products")

let gossaryCon=async(req,res)=>{
let{product_type}=req.body
let gossary=await products.find({product_type})
res.json(gossary)
}
module.exports=gossaryCon