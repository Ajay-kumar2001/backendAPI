const products = require("../MODELS/products")

let searchCon=async(req,res)=>{
    let searchData= await products.find()
    res.json(searchData)
}
module.exports=searchCon
