import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';

export const AddPlayer = () => {
    const [isEditting, setIsEditting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const navigate = useNavigate();

    const [inputs, setinput] = useState({
        name: '',
        age: '',
        gender: '',
        sport: '',
        fatherName: '',
        motherName: '',
        address: '',
        playerJourney: '',
    });

    const handleChange = (e) => {
        setinput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))};


  return (
    <div>
        <Box width={1700} marginLeft={13} marginTop={10} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} borderBottom={"3px solid #FE8D32"} paddingBottom={2} >
        <Typography marginLeft={95} variant="h4" fontFamily={"inherit"} fontStyle="normal" fontWeight="700" fontSize="35px" lineHeight={"42px"} color={"#FE8D32"} >
        Add Player</Typography>
        </Box>

        <Box>
            <Box width={481} height={481} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} style={{borderRadius: "100%", border: "1px solid black", marginTop: "50px", backgroundColor:"rgba(0, 0, 0, 0.05)", marginLeft: "700px"}} >
            <Typography variant="h4" fontFamily={"inherit"} fontStyle="normal" fontWeight="600" fontSize="35px" lineHeight={"42px"} color={"#FE8D32"} marginBottom={3} >
            Upload Profile Picture
            </Typography>
            <Box marginLeft={12}>
            <input type="file" id="profilepic" />
            </Box>
            <Typography>
                <h3 style={{marginLeft:"90px"}}>OR</h3><br></br>
                <span style={{marginRight:"40px"}}>Drag and Drop in this area</span>
            </Typography>
             </Box>

        </Box>
        <Box width={1127} height={556} marginLeft={55} >
            <TextField style={{width:"100%",border: "2px solid black",borderRadius:"10px"}} name='name' onChange={handleChange} value={inputs.name} type='text' placeholder='Player Name' margin='normal'/><br />
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} >
                <TextField style={{width:"30%",border: "2px solid black",borderRadius:"10px"}}name='age' onChange={handleChange} value={inputs.age} type='text' placeholder='Player age in Years' margin='normal'/>
                <Box>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> Select Gender</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{width: "360px", height: "50px",border: "2px solid black", borderRadius: "10px", marginTop: "20px", }} value={''} label="Sort by" onChange={(e) => {}} >
                        <MenuItem value={"Recent"}>Male</MenuItem>
                        <MenuItem value={"Newer"}>Female</MenuItem>
                        <MenuItem value={"Long"}>Another</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> Select Sports</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{width: "360px", height: "50px",border: "2px solid black", borderRadius: "10px", marginTop: "20px", }} value={''} label="Sort by" onChange={(e) => {}} >
                        <MenuItem value={"Recent"}>Cricket</MenuItem>
                        <MenuItem value={"Newer"}>Hockey</MenuItem>
                        <MenuItem value={"Long"}>Football</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
            </Box>
            <TextField style={{width:"49%",border: "2px solid black",borderRadius:"10px"}}name='fatherName' onChange={handleChange} value={inputs.fatherName} type='text' placeholder="Father's Name" margin='normal'/>
            <span style={{marginLeft:"20px"}}><TextField style={{width:"49%",border: "2px solid black",borderRadius:"10px"}}name='motherName' onChange={handleChange} value={inputs.motherName} type='text' placeholder="Mother's Name" margin='normal'/></span>
            <TextField style={{width:"100%",border: "2px solid black",borderRadius:"10px"}}name='address' onChange={handleChange} value={inputs.address} type='text' placeholder="Address" margin='normal'/>
            <textarea style={{height: "178px", width: "1121px",borderRadius: "10px", border: "2px solid black", marginTop: "5px", }} name="playerJourney" onChange={(e) => {}} value={inputs.playerJourney} type="text" placeholder="Player Journey" margin="normal" >

            </textarea>

        </Box>

        <Button variant="contained" color="warning" sx={{ fontWeight: "bold", fontFamily: "Inter", fontStyle: "normal", marginLeft: "850px", height: "50px", width: "250px", borderRadius: "50px", marginTop: "60px", }} >
          Upload
        </Button>
    </div>
  )
}
