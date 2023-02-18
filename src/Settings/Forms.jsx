import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

export default function Forms() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch',marginTop:'25px' },
      }}
      noValidate
      autoComplete="off"
    >     <div>
    <TextField
      required
      id="outlined-required"
      label="Contact Phone"
      defaultValue="Number"
    />
   
    <TextField
      id="outlined-required"
      label="Email"
      type="text"
      defaultValue="Email"
    />
     <FormControl fullWidth sx={{ m: 1, width: '50ch' }}>
      <InputLabel htmlFor="outlined-adornment-bio">Profile URL</InputLabel>
      <OutlinedInput
        id="outlined-adornment-bio"
        label="Profile URL"
        defaultValue="https://dashboard.com"
      />  
      </FormControl>
     <FormControl fullWidth sx={{ m: 1, width: '50ch'}}>
      <InputLabel htmlFor="outlined-adornment-bio">Address</InputLabel>
      <OutlinedInput
        id="outlined-adornment-Address"
        label="Address"
        defaultValue="Address"
        inputProps={{
            style: {
              height: "60px",
            },
        }}
      />  
      </FormControl>
      
  </div>
     

    </Box>
  );
}