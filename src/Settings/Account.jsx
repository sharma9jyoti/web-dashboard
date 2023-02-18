import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from './Button';
function Account() {
  return (
    <div>
    <Stack spacing={2}>
      <Card sx={{ minWidth:36 + "%", height: 270}}>
         <CardContent>
            <span style={{fontSize:"22px"}}><b>General Setting</b></span>
         </CardContent>
         <Divider/>
         <Stack direction="row">
           <CardContent>
            <Typography sx={{marginTop:"15px"}}>
               <FormControl fullWidth sx={{ width: '50ch' }}>
               <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
               <OutlinedInput
                id="outlined-adornment-username"
                label="Username"
                defaultValue="dashboard90"
                 /> 
                </FormControl>
             </Typography>
           </CardContent>
           <CardContent>
            <Typography sx={{marginTop:"10px"}}>
               <FormControl fullWidth sx={{ width: '50ch' }}>
               <InputLabel htmlFor="outlined-adornment-account">Account Email</InputLabel>
               <OutlinedInput
                id="outlined-adornment-account"
                label="Account Email"
                defaultValue="dashboard19@.com"
                 /> 
                </FormControl>
             </Typography>
           </CardContent>
           </Stack>
           <Stack direction="row">
           <CardContent>
            <Typography>
               <FormControl fullWidth sx={{ width: '50ch' }}>
               <InputLabel htmlFor="outlined-adornment-usertype">User Type</InputLabel>
               <OutlinedInput
                id="outlined-adornment-usertype"
                label="UserType"
                defaultValue="Admin"
                 /> 
                </FormControl>
             </Typography>
           </CardContent>
           <CardContent>
            <Typography>
               <FormControl fullWidth sx={{ width: '50ch' }}>
               <InputLabel htmlFor="outlined-adornment-location">Location</InputLabel>
               <OutlinedInput
                id="outlined-adornment-location"
                label="Location"
                defaultValue="India"
                 /> 
                </FormControl>
             </Typography>
           </CardContent>
           </Stack>
     </Card> 

     <Card sx={{ minWidth: 65 + "%", height: 270}}>
         <CardContent>
         <span style={{fontSize:"22px"}}><b>Advance Setting</b></span>    
         </CardContent>
         <Divider/>
         <span style={{color:"#313949",marginLeft:"10px"}}>Assign responsibility</span>
        
         <Typography sx={{display:"flex",marginLeft:"15px"}}>
           <Button/>
           <span style={{display:"flex",padding:"0 15px",marginTop:"5px"}}>Experience</span>
         </Typography>
       
          <Typography sx={{display:"flex",marginLeft:"15px"}}>
        <Button/>
        <span style={{display:"flex",padding:"0 15px",marginTop:"5px"}}>Location</span>
        </Typography>
         
          <Typography sx={{display:"flex",marginLeft:"15px"}}>
        <Button/>
        <span style={{display:"flex",padding:"0 15px",marginTop:"5px"}}>Final</span>
        </Typography>
        <CardContent>
        <span style={{fontSize:"14px",color:"#313949"}}>Be Careful</span> 
         </CardContent>
     </Card>
     </Stack>
  
   
</div>
  )
}

export default Account;
