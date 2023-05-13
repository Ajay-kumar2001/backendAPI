const products = require("../MODELS/products")

let mobilesCon=async(req,res)=>{
    let {product_type}=req.body
    let mobiles=await products.find({product_type})
    console.log(mobiles)
    res.json(mobiles)
}
module.exports=mobilesCon