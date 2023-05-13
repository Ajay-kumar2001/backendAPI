const e = require("express")
let multer=require("multer")
let products=require("../MODELS/products")
let fs=require("fs")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
      cb(null, '/pimages')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + 
      Math.round(Math.random() * 1E9)
      cb(null, file.fileName + '-' + uniqueSuffix+"."+
      file.mimetype.split("/")[1])
    }
  })
  
  const uploads = multer({ storage: storage })



  let productCon=(req,res)=>{
    console.log(req.body)
      let product_type=req.body.product_type
      let product_name=req.body.product_name
      let product_color=req.body.product_color
      let product_price=req.body.product_price
      let product_rating=req.body.product_rating
      let product_disp=req.body.disp
      let product_imgName=req.file?.fileName//const filename = req.file?.filename;

      console.log(product_imgName)
      let product_img =fs.readFileSync(`'/pimages/'${product_imgName}`)
      let prodData=new prodData({'product_type':product_type,'product_name':product_name,'product_color':product_color,
      'product_price':product_price,'product_rating':product_rating,'product_disp':product_disp,'product_imgName':product_imgName,'product_img':product_img})
      prodData.save().then(()=>{
          res.send("product added")
      }).catch((er)=>{
          res.send(er)
      })
      
  }
module.exports={productCon ,uploads}


// let productCon=async (req,res)=>{

//     const parts=mupt.parse(req.body)

//     for( i=0;i<parts.length;i++){
//         console.log(parts[i])
//     }

    
//     try{
//    let prodData= await new products(req.body)
//     prodData.save()
//     console.log(req.body)
//     res.json(req.body)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
