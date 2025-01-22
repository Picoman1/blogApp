const express = require('express')
const BlogApp=require('./routes/blogRoutes')
const Signup=require('./routes/userRoutes')
const app=new express()
const cors=require('cors')
require('./connection/db')
app.use(cors());
app.use('/blog',BlogApp)
app.use('/user',Signup)


app.listen(3000,()=>{
    console.log('server started at port no:3000')
})