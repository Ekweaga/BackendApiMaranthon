const express = require('express')
const db = require("../databaseConnection")
const userRoutes = require("../routes/userRoutes")
const blogRoutes = require("../routes/blogRoutes")
const contactRoutes = require("../routes/contactRoutes")

db();

const app = express();
const PORT = 5000;
app.use(express.json())
app.use("/auth",userRoutes)
app.use("blogPosts",blogRoutes)
app.use("phonebook",contactRoutes)


app.listen(PORT, ()=>console.log("Express started, backendApis"))