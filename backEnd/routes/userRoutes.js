const express = require('express');
const jwt=require('jsonwebtoken')
const signupModel = require('../models/user');
const router=express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());

router.post('/login',async (req,res)=>{
    const user= await signupModel.findOne({email:req.body.email})
    if(!user){
        res.status(404).send({message:'user not found'})
    }
    try {
        if(user.password==req.body.password){
            const payload={email:user.email,password:user.password};
            const token=jwt.sign(payload,'secret_key')
            res.status(200).send({message:'login successfull',token:token})
        }else{
            res.status(400).send({message:' invalid login '})
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports=router;