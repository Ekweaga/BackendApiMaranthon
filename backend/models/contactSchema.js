
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
    firstname:{
        type:String,
        unique:[true,"Please provide unique username"]
      

    }
,
lastname:{
    type:String,
    
},
    email:{
        type:String,
        unique:[true,"Email must be unique"]
        
        
    },
location:{
        type:String,
        
      
        
    },
    gender:{
        type:String
    },
    Age:{
        type:String
    },

    userImage:{
        type:String
    }
   
   
})



module.exports =  mongoose.models.Contact || mongoose.model("Contact",UserSchema)