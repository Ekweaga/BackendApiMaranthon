

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}
const mongooseDb = require("mongoose")


const dbConnectionDetails ="mongodb://0.0.0.0:27017/expressApis"

 const connectDb = async ()=>{
 await  mongooseDb.connect(dbConnectionDetails).then(()=>console.log("Conected")).catch((err)=>console.log("err",err))
 
}

module.exports = connectDb

