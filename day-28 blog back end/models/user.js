const mongoose=require('mongoose')

const loginSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phoneNumber:Number,
    address:String
})

const signupModel=mongoose.model('login',loginSchema)
module.exports=signupModel;