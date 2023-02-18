import React from 'react'
import Sidenav from '../Components/Sidenav';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import List from '../Settings/List';

function Settings() {
  return (
    <>
    <div className="bgcolor">
     <Navbar/>
      <Box height={50}/>
    <Box sx={{ display: 'flex' }}>
       <Sidenav/>
       
       <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
       <List/> 
       </Box>
    </Box>
    </div>
    </>
   
  )
}

export default Settings;
