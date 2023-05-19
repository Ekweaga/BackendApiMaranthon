const express = require('express')
const router = express.Router()
const {getBlogs,getBlog} = require("../controllers/Blogs")



router.get("/blogs",getBlogs)

router.get("/blogs/:id",getBlog);




module.exports = router