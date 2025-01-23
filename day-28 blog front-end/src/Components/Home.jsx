import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import  Grid  from '@mui/material/Grid2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'

const Home = () => {
    
    const [cardData,setcardData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
      axiosInstance.get('/blog/addblogs/get').then((res)=>{
           setcardData(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
    function update_data(val){
         navigate('/addblogs',{state:{val}})
    }
    const handleDelete = async (id) => {
        try {
          const res = await axiosInstance.delete(`/blog/addblogs/delete/${id}`);
          console.log('Deleted blog:', res.data);
          // Remove deleted card from state
          setCardData((prevData) => prevData.filter((item) => item._id !== id));
        } catch (error) {
          console.error('Error deleting blog:', error);
        }
      };
    return (
        <div style={{margin:'8%'}} >
            <Grid container spacing={2}>
               {
                cardData.map((item)=>(
                    <Grid size={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={item.imageUrl}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                               {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' color='warning' onClick={()=>update_data(item)}>Update</Button>
                            <Button size="small" variant='contained' color='error' onClick={() => handleDelete(item._id)} >Delete</Button>
                        </CardActions>
                    </Card>

                </Grid>
                ))
               }
            </Grid>
        </div>
    )
}

export default Home
