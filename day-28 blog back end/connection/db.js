const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://Nikhil:iamsorry1@cluster0.lylxk.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('database connected');
}).catch(()=>{
    console.log('database connection failed')
})