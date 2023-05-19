const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Contact = require("../../models/contactSchema")


const uploadFile = asyncHandler(async(req,res)=>{
    const imgage = req.file.filename

})

module.exports = {uploadFile}
