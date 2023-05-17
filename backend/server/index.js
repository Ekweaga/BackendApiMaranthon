const express = require('express')

const app = express();
const PORT = 5000;
app.get("/",(req,res))

app.listen(PORT, ()=>console.log("Express started, backendApis"))