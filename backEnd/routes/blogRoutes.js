const express = require('express');
const addblogsModel=require('../models/addBlog')
const router=express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
const jwt=require('jsonwebtoken')
function verifytoken(req,res,next){
    let token=req.headers.token;
    try {
        if(!token) throw 'unauthorized access';
        else{
            let payload=jwt.verify(token,'secret_key');
            if(!payload) throw 'unauthorized access'
            next();
        }
    } catch (error) {
        console.log(error)
    }
}

router.get('/addblogs/get',async (req,res)=>{
    try {
        const data= await addblogsModel.find( );
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send('addblogs failed')
    }
})
router.post('/addblogs/post',verifytoken, async (req,res)=>{
    try {
        const data= await addblogsModel.create(req.body)
        res.status(200).send({message:'post successfull'})
    } catch (error) {
        res.status(500).send({message:'post failed'})
    }
})

router.put('/addblogs/put/:id',verifytoken,async (req,res)=>{
    try { 
        
        const data= await addblogsModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send({message:'update sucessfull'})
    } catch (error) {
        res.status(500).send('addblogs failed')
    }
})


router.delete('/addblogs/delete/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from URL parameters
        const data = await addblogsModel.findByIdAndDelete(id); // Use the extracted ID
        if (!data) {
            return res.status(404).send('Blog not found');
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send('addblogs failed');
    }
});




module.exports=router;