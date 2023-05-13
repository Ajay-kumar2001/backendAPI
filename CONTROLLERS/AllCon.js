const products = require("../MODELS/products")

let AllCon=async(req,res)=>{
    let totalprod=await products.find()
     console.log(totalprod)
    res.json(totalprod)
}
module.exports=AllCon