import React from 'react';
import Sidenav from '../Components/Sidenav';
import Navbar from '../Components/Navbar';
import AccordionDash from '../Components/AccordionDash';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from '../Charts/BarChart';

function Home() {
  return (
    <>
    <div className="bgcolor">
    <Navbar/>
      <Box height={70}/>
         <Box sx={{ display: 'flex' }}>
          <Sidenav/>
           <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <Stack spacing={2}direction="row">
               <Card sx={{ minWidth: 49 + "%", height: 150 }}className="gradient">
                  <CardContent>
                    <div className="iconstyle">
                      <CreditCardIcon/>
                    </div>
                       <Typography gutterBottom variant="h5" component="div"sx={{color:"#ffffff"}}>
                        Clients Name
                       </Typography> 
                       <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                       Total Earnings
                       </Typography>                       
                  </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + "%", height: 150}}className="gradientlight">
                  <CardContent>
                  <div className="iconstyle">
                    <ShoppingBagIcon/>
                  </div>
                       <Typography gutterBottom variant="h5" component="div"sx={{color:"#ffffff"}}>
                       Total Resume
                       </Typography>   
                       <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                       Total Count
                       </Typography>        
                  </CardContent>
              </Card>
              </Stack>
              </Grid>
                  <Grid item xs={4}>
                  <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345,height:10+"vh" }}className="gradientlight">
                  
                   <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                         <StorefrontIcon/>
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">203K</span>
                    <br/>
                    <span className="pricesubtitles">Total User</span>
                    </div> 
                    </Stack>
                 
                  </Card>
                  <Card sx={{ maxWidth: 345,height:10+"vh" }}>
                 
                  <Stack spacing={2} direction="row">
                    <div className="iconstyleblack">
                         <StorefrontIcon/>
                    </div>
                    <div className="paddingall">
                         <span className="pricetitles">203K</span>
                         <br/>
                         <span className="pricesubtitle">Total Earn</span>
                    </div> 
                    </Stack>
                
               </Card>
             </Stack>
         </Grid>
      </Grid>
            <Box height={20}/>
              <Grid container spacing={2}>
                 <Grid item xs={8}> 
                 <Card sx={{height : 60 + "vh"}}>
                  <CardContent>
                     <BarChart/>
                  </CardContent>
                  </Card>
                 </Grid>      
                 <Grid item xs={4}>
                 <Card sx={{height : 60 + "vh"}}>
                  <CardContent>
                    <div className="paddingall">
                         <span className="pricetitles">Popular Companies</span>
                    </div> 
                     <AccordionDash/>
                     
                  </CardContent>
                  </Card>
                 </Grid>
              </Grid>
           </Box>
         </Box>
    </div>
     
  
    </>
   
  )
}

export default Home;
