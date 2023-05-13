const products = require("../MODELS/products")

let electrinicCon=async(req,res)=>{
    let {product_type}=req.body
    let electrinic= await products.find({product_type})
    res.json(electrinic)
}
module.exports=electrinicCon