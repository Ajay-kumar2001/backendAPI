let mongoose=require("mongoose")
let prodSchema=new mongoose.Schema({
product_type:{type:String},
product_name:{type:String},
product_color:{type:String},
product_price:{type:String},
product_rating:{type:String},
product_disp:{type:String},
product_imgName:{type:String},
product_img:{type:Buffer}
})
module.exports=mongoose.model("products",prodSchema)


// let mongoose=require('mongoose')
// let prodSch=new mongoose.Schema({
//     _id:Number,
//     pname:String,
//     ptype:String,
//     price:Number,
//     pimgname:String,
//     pimg:Buffer
// })

// module.exports=mongoose.model('prod',prodSch)
