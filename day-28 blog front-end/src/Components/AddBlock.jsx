import React, { useEffect, useState } from 'react'
import { TextField,Button } from '@mui/material'
import  Grid  from '@mui/material/Grid2'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';
const AddBlock = () => {

  const [blogData,setblogData]=useState({
       title:'',
       imageUrl:'',
       description:''
  });
  const navigate=useNavigate()
  const location=useLocation()
  function addBlog(){
    if(location.state!=null){
      axiosInstance.put('http://localhost:3000/blog/addblogs/put/'+location.state.val._id,blogData).then((res)=>{
        alert(res.data.message);
        navigate('/blogs')
      })
    }else{
      axiosInstance.post('http://localhost:3000/blog/addblogs/post',blogData).then((res)=>{
        alert(res.data.message);
        navigate('/blogs')
      }).catch((error)=>{
        alert('post failed');
      })
      }
    }
    

  useEffect(()=>{
    if (location.state!=null) {
         setblogData({
          ...blogData,title:location.state.val.title,
          description:location.state.val.description,
          imageUrl:location.state.val.imageUrl
         }
         )
    } else {
      setblogData({...blogData,title:'',
        description:'',
        imageUrl:''
      })
    }
  },[])
  return (
    <div>
       <div style={{textAlign:'center',margin:'10%'}} >
      
      <Grid container spacing={2}>
    <Grid size={{ xs: 6, md: 6 }}>
      <TextField label="Title" variant='outlined' value={blogData.title} fullWidth name='title' onChange={(e)=>{setblogData({...blogData,title:e.target.value})}}></TextField>
    </Grid>
    <Grid size={{ xs: 6, md: 6 }}>
    <TextField label="imageurl" variant='outlined' value={blogData.imageUrl} fullWidth name='imageUrl'onChange={(e)=>{setblogData({...blogData,imageUrl:e.target.value})}}></TextField>
    </Grid>
    <Grid size={{ xs: 12, md: 12 }}>
    <TextField label="description" variant='outlined' value={blogData.description} fullWidth multiline rows={4} name='description' onChange={(e)=>{setblogData({...blogData,description:e.target.value})}}></TextField>
    </Grid>
    <Grid size={{ xs: 12, md: 12 }}>
    <Button color='primary' variant='contained' onClick={addBlog}>Add Blog</Button>
    </Grid>
    </Grid>
      </div>
    </div>
  )
}

export default AddBlock
