import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import Form from './Form';
import Forms from './Forms';

function Personal() {
  return (
    <div>
             <Stack spacing={2}direction="row">
               <Card sx={{ minWidth:50 + "%", height: 450}}>
                  <CardContent>
                     <span style={{fontSize:"22px"}}>Personal Information</span>
                   <Divider/>
                      <Typography>
                        <Form/>
                      </Typography>                 
                  </CardContent>
              </Card> 
              <Card sx={{ minWidth: 50 + "%", height: 450}}>
                  <CardContent>
                  <span style={{fontSize:"22px"}}>Contact Information</span>
                   <Divider/>
                      <Typography>
                        <Forms/>
                      </Typography>         
                  </CardContent>
              </Card>
              </Stack>
           
            
    </div>
  )
}

export default Personal;
