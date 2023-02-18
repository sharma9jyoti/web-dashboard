import React from 'react';
import Sidenav from '../Components/Sidenav';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import GeoChart from '../Charts/GeoChart';
import PieChart from '../Charts/PieChart';
import HbarChart from '../Charts/HbarChart';

function Analytics(){
return (
  <>
   <div className="bgcolor">
   <Navbar/>
      <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
       <Sidenav/>
       <Box component="main" sx={{ flexGrow: 1, p: 3}}>
       <Grid container spacing={2}>
             <Grid item xs={5}>
             <Stack spacing={2}direction="row">
               <Card sx={{ minWidth: 49 + "%", height: 150 }}className="gradient">
                  <CardContent>
                    <div className="iconstyle">
                      
                    </div>
                       <Typography gutterBottom variant="h5" component="div"sx={{color:"#ffffff"}}>
                        Clients Name
                       </Typography> 
                       <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                       Total Companies
                       </Typography>                       
                  </CardContent>
              </Card> 
              <Card sx={{ minWidth: 49 + "%", height: 150}}className="gradientlight">
                  <CardContent>
                  <div className="iconstyle">
                   
                  </div>
                       <Typography gutterBottom variant="h5" component="div"sx={{color:"#ffffff"}}>
                       Total Resume
                       </Typography>   
                       <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                       Selected Resume
                       </Typography>        
                  </CardContent>
              </Card>
              </Stack>
              <Stack spacing={2} sx={{ marginTop: 2}}direction="row">
               <Card sx={{ minWidth: 49 + "%", height: 150}}className="gradient">
                  <CardContent>
                    <div className="iconstyle">
                     
                    </div>
                       <Typography gutterBottom variant="h5" component="div"sx={{color:"#ffffff"}}>
                        Clients Details
                       </Typography> 
                       <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                       Total numbers
                       </Typography>                       
                  </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + "%", height: 150}}className="gradientlight">
                  <CardContent>
                  <div className="iconstyle">
                   
                  </div>
                       <Typography gutterBottom variant="h5" component="div"sx={{color:"#ffffff"}}>
                       Total Updates
                       </Typography>   
                       <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                       No of count
                       </Typography>        
                  </CardContent>
              </Card>
              </Stack>
             </Grid>
                <Grid item xs={7}>
                <Card sx={{height : 45 + "vh"}}> 
                  <CardContent>
                  <HbarChart/>
                  </CardContent>
                  </Card>
                </Grid>
                
                   <Grid item xs={7}>
                   <Card sx={{height : 50 + "vh"}}>
                  <CardContent>
                    <GeoChart/>
                  </CardContent>
                  </Card>
                   </Grid>
                     <Grid item xs={5}>
                     <Card sx={{height : 50 + "vh"}}>
                  <CardContent>
                  <PieChart/>
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
export default Analytics;