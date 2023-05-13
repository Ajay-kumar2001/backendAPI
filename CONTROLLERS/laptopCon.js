const products = require("../MODELS/products")

let laptopCon=async(req,res)=>{
    let{product_type}=req.body
    let laptops=await products.find({product_type})
    res.json(laptops)
}
module.exports=laptopCon