import React, { useState } from 'react'
import { Button, TextField,Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../axiosInterceptor'
const Login = () => {
  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
 function capvalue(){
  console.log(form)
  axiosInstance.post('http://localhost:3000/user/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token)
        navigate('/blogs')
      }else{
        navigate('/')
      }
      
  }).catch((error)=>{
    alert('Invalid Login');
  })
 } 
  return (
    <div style={{textAlign:'center',margin:'10%',fontWeight:'bold'}} >
      <Typography variant='h5'>BlogApp Login</Typography>
      <br />
      <div>
      <TextField label="Email" name='email' onChange={(e)=>{setForm({...form,email:e.target.value})}}></TextField>
      </div><br />
      <div>
      <TextField label="Password" name='password' onChange={(e)=>{setForm({...form,password:e.target.value})}}></TextField>
      </div>
      <br />
      <Button color='primary' variant='contained' onClick={capvalue}>Login</Button>
      <div><br />
        <Link to={'/signup'}>New User? Register here</Link>
      </div>
    </div>
  )
}

export default Login
