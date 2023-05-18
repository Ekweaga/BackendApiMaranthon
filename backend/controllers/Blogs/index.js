
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/userSchema")

const getBlogs = asyncHandler(async (req,res)=>{

    if(req.method == "GET"){
        
        try{
          posts = await Blog.find()
    
          if(posts.length == 0){
            return res.status(404).json({message:"Details not found"})
    
          }
    
          if(!posts){
            return res.status(500).json({message:"Server Error"})
          }
          return res.status(200).json({posts:posts})
    }
    catch(err){
    
    
    }
    
      }
    
      else{
        return;
      }

})



const getBlog = asyncHandler(async (req,res)=>{

    if(req.method == "GET"){
        const {id} = req.params
        let blog;
        blog = User.find({_id:id})

        if(blog){
            res.status(200).json({message:blog})
        }

        else{
            res.status(400).json({message:"Item not found"})
        }

      

    

              

}

else{
    res.status(404).json({message:`request method not valid `})
}

})




module.exports = {getBlogs,getBlog}