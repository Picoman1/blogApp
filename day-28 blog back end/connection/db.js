const mongoose= require('mongoose')

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log('database connected');
}).catch(()=>{
    console.log('database connection failed')
})