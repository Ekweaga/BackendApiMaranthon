const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Contact = require("../../models/contactSchema")


const getContacts = asyncHandler(async(req,res)=>{
    if(req.method == "GET"){
        let contacts;
        try{
          contacts = await Contact.find()
    
          if(contacts.length == 0){
            return res.status(404).json({message:"Details not found"})
    
          }
    
          if(!contacts){
            return res.status(500).json({message:"Server Error"})
          }
          return res.status(200).json({posts:posts})
    }
    catch(err){
            res.status(500).json({message:err.message})
    
    }
    
      }
    
      else{
        return res.status(400).json({message:`Cannot process ${req.method} request`})
      }
    
})

const getContact = asyncHandler(async(req,res)=>{
    const {id} = req.params.id
    const contact = Contact.find(id)
    if(contact){
        res.status(200).json({message:contact})
    }

})

const editContact = asyncHandler(async(req,res)=>{

})

const deleteContact = asyncHandler(async(req,res)=>{
    const {id} = req.params.id

    const deleteItem = await Contact.findOneAndDelete(id)
    if(deleteItem){
        return res.status(200).json({message:`Contact with the ${id} has been removed from databse`})
    }

    else{
        
    }

})

const deleteContacts = asyncHandler(async(req,res)=>{

    await Contact.deleteMany({})

})


module.exports = {getContacts,getContact}