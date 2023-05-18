const express = require('express')
const router = express.Router()
const {login,signup,generateOTP} = require("../controllers/authentication/")


router.post("/signup",signup)

router.post("/login",login)

router.post("/authme",(req,res)=>{

})



router.post("/generateOTp",generateOTP)

router.post("resetLink",)

router.post("verifyOTP",(req,res)=>{

})

router.post("/resetpassword",(req,res)=>{

})


module.exports = router