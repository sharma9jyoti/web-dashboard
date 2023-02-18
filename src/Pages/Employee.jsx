import React from "react";
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

function Employee() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={40} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
            <Stack direction="row">
              <Typography sx={{ marginTop: "10px" }}>
                {" "}
                Create Job Openings-
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Typography sx={{ marginLeft: "550px", marginTop: "10px" }}>
                <Button variant="outlined">Cancel</Button>
              </Typography>
              <Typography sx={{ margin: "10px" }}>
                <Button variant="contained">Submit</Button>
              </Typography>
            </Stack>
            <Divider />

            <Card sx={{ height: 90 + "vh" }}>
                  <Typography sx={{padding: "10px",fontWeight: 'bold'}}>
                    Job Opening information 
                   </Typography>

              <CardContent sx={{display:"flex"}}>
                 <Typography sx={{padding: "10px"}}>
                    Posting Title
                 </Typography>
                  <TextField id="outlined-basic" variant="outlined" inputProps={{style:{height: "8px",},}} />
              </CardContent>

              <CardContent sx={{display:"flex"}}>
                 <Typography sx={{padding: "0 10px"}}>
                    Posting Title
                 </Typography>
                  <TextField id="outlined-basic" variant="outlined" inputProps={{style:{height: "8px",},}} />
              </CardContent>
            </Card>

          </Box>
        </Box>
      </div>
    </>
  );
}

export default Employee;
