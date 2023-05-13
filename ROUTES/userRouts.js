let {reg, User_login,}=require("../CONTROLLERS/registationAndLoginCon")
let express=require("express")
const Authentication = require("../MIDLEWARES/authentication")
const getUserCon = require("../CONTROLLERS/getUserCon")
const {productCon ,uploads}= require("../CONTROLLERS/productsCon")
const AllCon = require("../CONTROLLERS/AllCon")
const mobilesCon = require("../CONTROLLERS/mobilesCon")
const laptopCon = require("../CONTROLLERS/laptopCon")
const electrinicCon = require("../CONTROLLERS/electronicCon")
const gossaryCon = require("../CONTROLLERS/gossaryCon")
const searchCon = require("../CONTROLLERS/searchCon")
let route=express.Router()
route.post("/register",reg)
route.post("/login",User_login)
route.get("/getAllUsers",getUserCon)//*GET ALL USERS */
route.post("/products",productCon,uploads.single("img"), productCon)/*ADDING PRODUCTS*/
route.get("/All",AllCon)
route.post("/mobiles",mobilesCon)
route.post("/laptops",laptopCon)
route.post("/electronicitems",electrinicCon)
route.post("/gossary",gossaryCon)
route.get("/search",searchCon)
module.exports=route

