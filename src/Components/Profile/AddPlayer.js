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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const AddPlayer = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
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

    const mainBoxStyle = matches ? {paddingTop:"80px",margin:"auto",width:"360px",borderTop:"1px solid rgba(0, 0, 0, 0.2)",marginTop:"30px"}:{}
    const UploadBoxStyle = matches?{margin:"auto",width:"250px" ,height:"70px" ,display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", border: "1px solid #FE8D32", backgroundColor:"rgba(0, 0, 0, 0)"}:{width:"481px" ,height:"481px" ,display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius: "100%", border: "1px solid black", marginTop: "100px", backgroundColor:"rgba(0, 0, 0, 0.05)", marginLeft: "700px"}
    const TypoBoxStyle = matches ? {position:"absolute",fontFamily:"inherit", fontStyle:"normal" ,fontWeight:"700" ,fontSize:"25px", lineHeight:"42px", color:"black",marginBottom:"150px" }:{ fontFamily:"inherit", fontStyle:"normal" ,fontWeight:"600" ,fontSize:"35px", lineHeight:"42px", color:"#FE8D32", marginBottom:"30px" }
    const inputFileBox = matches ?{marginLeft:"45px",paddingTop:"18px"}:{marginLeft:"50px"}
    const PlayerDetailsBox = matches ? {width:"360px", padding:"10px",}:{width:"1127px" ,height:"556px", marginLeft:"410px"}
    const PlayerDetailTypo= matches ?{width:"100%",borderRadius:"20px"}:{width:"100%",border: "2px solid black",borderRadius:"10px"}
    const PlayerDetailsBoxChild = matches ? {display:"flex", flexDirection:"column", justifyContent:"space-between"}:{display:"flex", flexDirection:"row", justifyContent:"space-between"}
    const PlayerDetailTypo2= matches ?{width:"100%",borderRadius:"20px"}:{width:"30%",border: "2px solid black",borderRadius:"10px"}
    const selectStyle = matches ? {width: "100%",marginTop:"10px"}:{width: "360px", height: "50px",border: "2px solid black", borderRadius: "10px", marginTop: "20px", }
    const PlayerDetailTypo3= matches ?{width:"100%",borderRadius:"20px"}:{width:"49%",border: "2px solid black",borderRadius:"10px"}
    const spanStyle = matches ? {}:{marginLeft:"20px"}
    const textAreaStyle = matches ? {height: "121px", width: "100%",borderRadius: "10px",  marginTop: "5px", }:{ width: "1121px",borderRadius: "10px", marginTop: "5px", }
    const ButtonStyle = matches ? { fontWeight: "bold", fontFamily: "Inter", fontStyle: "normal", marginLeft: "50px", height: "50px", width: "250px", borderRadius: "50px", marginTop: "100px", }:{ marginTop: "80px", fontWeight: "bold", fontFamily: "Inter", fontStyle: "normal", marginLeft: "850px", height: "50px", width: "250px", borderRadius: "50px", marginTop: "55px", }
    return (
    <div>
    <Box sx={mainBoxStyle}>

        {!matches && <Box width={1700} marginLeft={13} marginTop={10} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} borderBottom={"3px solid #FE8D32"} paddingBottom={2} >
        <Typography marginLeft={95} variant="h4" fontFamily={"inherit"} fontStyle="normal" fontWeight="700" fontSize="35px" lineHeight={"42px"} color={"#FE8D32"} >
        Add Player</Typography>
        </Box> }

        <Box>
            <Box sx={UploadBoxStyle} >
            <Typography sx={TypoBoxStyle} >
            Upload Profile Picture
            </Typography>
                <Box sx={inputFileBox}>
                <input type="file" id="profilepic" />
                </Box>
                {!matches && <Typography>
                    <h3 style={{marginLeft:"90px"}}>OR</h3><br></br>
                    <span style={{marginRight:"40px"}}>Drag and Drop in this area</span>
                </Typography>}
             </Box>

        </Box>

       <Box sx={PlayerDetailsBox} >
            <TextField style={PlayerDetailTypo} name='name' onChange={handleChange} value={inputs.name} type='text' placeholder='Player Name' margin='normal'/><br />
            <Box sx={PlayerDetailsBoxChild} >
                <TextField style={PlayerDetailTypo2}name='age' onChange={handleChange} value={inputs.age} type='text' placeholder='Player age in Years' margin='normal'/>
                <Box>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> Select Gender</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" style={selectStyle} value={''} label="Sort by" onChange={(e) => {}} >
                        <MenuItem value={"Recent"}>Male</MenuItem>
                        <MenuItem value={"Newer"}>Female</MenuItem>
                        <MenuItem value={"Long"}>Another</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> Select Sports</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select"style={selectStyle} value={''} label="Sort by" onChange={(e) => {}} >
                        <MenuItem value={"Recent"}>Cricket</MenuItem>
                        <MenuItem value={"Newer"}>Hockey</MenuItem>
                        <MenuItem value={"Long"}>Football</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
            </Box>
          <TextField style={PlayerDetailTypo3}name='fatherName' onChange={handleChange} value={inputs.fatherName} type='text' placeholder="Father's Name" margin='normal'/>
            <span style={spanStyle}><TextField style={PlayerDetailTypo3} name='motherName' onChange={handleChange} value={inputs.motherName} type='text' placeholder="Mother's Name" margin='normal'/></span>
             <TextField style={PlayerDetailTypo}name='address' onChange={handleChange} value={inputs.address} type='text' placeholder="Address" margin='normal'/> 
            {/* <textarea style={{height: "178px", width: "1121px",borderRadius: "10px", border: "2px solid black", marginTop: "5px", }} name="playerJourney" onChange={(e) => {}} value={inputs.playerJourney} type="text" placeholder="Player Journey" margin="normal" >

            </textarea> */}
             <TextField
            style={textAreaStyle}
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            multiline
            rows={7}
            maxRows={8}
            />

        </Box>

         <Button variant="contained" color="warning" sx={ButtonStyle} >
          Upload
        </Button>

    </Box>
    </div>
  )
}
