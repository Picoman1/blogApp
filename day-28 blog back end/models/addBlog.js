const mongoose=require('mongoose')

const addBlogSchema=mongoose.Schema({
    title:String,
    imageUrl:String,
    description:String

})

const addBlogModel=mongoose.model('addblog',addBlogSchema)
module.exports=addBlogModel;