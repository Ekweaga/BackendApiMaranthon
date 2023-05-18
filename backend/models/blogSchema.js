
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const blogSchema = new Schema({
 
    author:{
        type:String,
      

    }
,



    image:{
        type:String,
        
        
    },
    title:{
        type:String,
      
        
    },
    content:{
        type:String,
     
        
    },
    category:{
        type:String,
        
        
    }
})



module.exports =  mongoose.models.Blog || mongoose.model("Blog",blogSchema)