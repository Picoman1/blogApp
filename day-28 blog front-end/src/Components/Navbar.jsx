import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const handleLogout = () => {
    // Clear the token from sessionStorage
    sessionStorage.removeItem('logintoken');

    // Redirect to the login page
    navigate('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         BlogApp
        </Typography>
        <Link to={'/blogs'}><Button style={{color:'white'}}>Home</Button></Link>
        <Link to={'/addblogs'}><Button style={{color:'white'}}>Add Blog</Button></Link>
        <Link to={'/'}><Button style={{color:'white'}} onClick={handleLogout}>Log out</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
