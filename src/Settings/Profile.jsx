import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';

function Profile() {
  return (
    <div>
    <Stack spacing={2}direction="row">
      <Card sx={{ minWidth:36 + "%", height: 250}}>
         <CardContent>
            <span style={{fontSize:"22px"}}><b>Jyoti Sharma</b></span>
          <Divider/>
          
             <Typography sx={{display:"flex",marginTop:"15px"}}>
            <EmailIcon/>
            <span style={{display:"flex",padding:"0 50px"}}> jyoti@gmail.com</span>
             </Typography>
         </CardContent>
         <Divider/>
         <CardContent>
            <Typography sx={{display:"flex"}}>
             <PhoneAndroidIcon/>
             <span style={{display:"flex",padding:"0 50px"}}>(+91)9900002223</span>
            </Typography>
         </CardContent>
         <Divider/>
         <CardContent>
            <Typography sx={{display:"flex"}}>
             <PlaceIcon/>
             <span style={{display:"flex",padding:"0 50px"}}>abcdefghijklmnopqr</span>
            </Typography>
         </CardContent>
     </Card> 
     <Card sx={{ minWidth: 65 + "%", height: 480}}>
         <CardContent>
         <span style={{fontSize:"22px"}}><b>About Me</b></span>
          <Divider/>
             <Typography >
            <div>
            The full passage of standard Lorem Ipsum copy is: Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
             quis nostrud exercitation .
            </div>
             </Typography>
             <Typography sx={{fontSize:"20px",marginTop:"20px"}}><b>Details</b></Typography>
         </CardContent>
         <Divider/>
         <CardContent>
         <Typography sx={{display:"flex",marginLeft:"18px"}}>
            <div><b>Full Name:</b></div>
             <span style={{display:"flex",padding:"0 80px"}}>Jyoti Sharma</span>
            </Typography>
         </CardContent>
         <Divider/>
         <CardContent>
         <Typography sx={{display:"flex",marginLeft:"18px"}}>
            <div><b>Father's Name:</b></div>
             <span style={{display:"flex",padding:"0 50px"}}>B K Sharma</span>
            </Typography>
         </CardContent>
         <Divider/>
          <CardContent>
         <Typography sx={{display:"flex",marginLeft:"18px"}}>
            <div><b>Address:</b></div>
             <span style={{display:"flex",padding:"0 95px"}}>Gujarat,India</span>
            </Typography>
         </CardContent>
         <Divider/>
          <CardContent>
         <Typography sx={{display:"flex",marginLeft:"18px"}}>
            <div><b>Zip Code:</b></div>
             <span style={{display:"flex",padding:"0 95px"}}>00998877</span>
            </Typography>
         </CardContent>
         <Divider/>
         <CardContent>
         <Typography sx={{display:"flex",marginLeft:"18px"}}>
            <div><b>Website:</b></div>
             <span style={{display:"flex",padding:"0 95px"}}>https://dashboard.com</span>
            </Typography>
         </CardContent>


     </Card>
     </Stack>
  
   
</div>
  )
}

export default Profile
