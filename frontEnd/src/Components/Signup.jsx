import React from 'react'
import Grid from '@mui/material/Grid2';
import {TextField,Button} from '@mui/material';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    
    <div style={{textAlign:'center',margin:'10%'}} >
      
    <Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 6 }}>
    <TextField label="Name" variant='outlined' fullWidth ></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField label="Email" variant='outlined' fullWidth></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField label="Passsword" variant='outlined' fullWidth></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField label="Phone NUmber" variant='outlined' fullWidth ></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <TextField label="Address" variant='outlined' fullWidth multiline rows={4} ></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <Button variant='contained' color='primary'>signup</Button>
  </Grid>
  <Grid>
    <Link to={'/'}>Already Registered? Login here</Link>
  </Grid>
</Grid>
    </div>
  )
}

export default Signup
