import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';


export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch',marginTop:'25px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Name"
        />
       
        <TextField
          id="outlined-required"
          label="Location"
          type="text"
          autoComplete="current-location"
        />
        <TextField
          id="outlined-required"
          label="Education"
          type="text"
          autoComplete="current-location"
        />

         <FormControl fullWidth sx={{ m: 1, width: '50ch',height:'30ch' }}>
          <InputLabel htmlFor="outlined-adornment-bio">Bio</InputLabel>
          <OutlinedInput
            id="outlined-adornment-bio"
            label="Bio"
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