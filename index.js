let express=require("express")
let mongoose=require("mongoose")
let app=express()
app.use(express.json())

let cors=require("cors")
let multer=require("multer")
app.use(cors())
let bodyParser=require("body-parser")                                        
app.use(bodyParser.urlencoded({extended:true}))

let rout=require("./ROUTES/userRouts")
app.use("",rout)

mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>{console.log("database is connect...")}).catch(()=>{console.log("not connected")})


app.listen(5000,()=>{
    console.log("server is runing.....")
})
