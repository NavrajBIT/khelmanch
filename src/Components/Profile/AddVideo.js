import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button ,TextField} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const AddVideo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [isEditting, setIsEditting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const navigate = useNavigate();


  const UploadBoxStyle =  matches ? {margin:"auto",width:"250px" ,height:"70px" ,display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", border: "1px solid #FE8D32", backgroundColor:"rgba(0, 0, 0, 0)"}:{width:"1127px" ,height:"556px" ,display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", borderRadius: "10px", border: "1px solid black", marginTop: "50px", backgroundColor:"rgba(0, 0, 0, 0.05)", marginLeft: "400px"}
  const TypoBoxStyle = matches ? {position:"absolute",fontFamily:"inherit", fontStyle:"normal" ,fontWeight:"700" ,fontSize:"25px", lineHeight:"42px", color:"black",marginBottom:"150px" }:{ fontFamily:"inherit", fontStyle:"normal" ,fontWeight:"600" ,fontSize:"35px", lineHeight:"42px", color:"#FE8D32", marginBottom:"3px" }
  const VideoTypoTitle = matches ?{ fontFamily:"inherit", fontStyle:"normal", fontWeight:"600" ,fontSize:"18px" ,lineHeight:"30px", color:"black"}:{fontFamily:"inherit", fontStyle:"normal", fontWeight:"600" ,fontSize:"25px" ,lineHeight:"42px", color:"black"}
  const mainBoxStyle = matches ? {paddingTop:"80px",margin:"auto",width:"360px",borderTop:"1px solid rgba(0, 0, 0, 0.2)",marginTop:"30px"}:{}
  const inputFileBox = matches ?{marginLeft:"45px",paddingTop:"18px"}:{marginLeft:"12px"}
  const textAreaStyle = matches ? {height: "121px", width: "320px",borderRadius: "10px",  marginTop: "5px", }:{ width: "1121px",borderRadius: "10px", marginTop: "5px", }
  const VideoTitleBox = matches ?{margin:"auto",marginLeft:"18px",marginTop:"35px"}:{marginLeft:"400px", marginTop:"50px"}
  const selectorMainBoxStyle = matches ?{padding:"20px",width:"360px" ,marginTop:"90px" ,display:"flex", flexDirection:"row", justifyContent:"space-between" }:{width:"900px" ,marginLeft:"500px" ,marginTop:"30px" ,display:"flex", flexDirection:"row", justifyContent:"space-between" }
  const selectStyle = matches ? {width: "150px", height: "40px", borderRadius: "10px",  marginTop: "5px", }:{width: "200px", height: "50px", borderRadius: "10px", border: "2px solid black", marginTop: "5px", }
  const ButtonStyle = matches ? { marginTop: "80px", fontWeight: "bold", fontFamily: "Inter", fontStyle: "normal", marginLeft: "50px", height: "50px", width: "250px", borderRadius: "50px", marginTop: "55px", }:{ marginTop: "80px", fontWeight: "bold", fontFamily: "Inter", fontStyle: "normal", marginLeft: "850px", height: "50px", width: "250px", borderRadius: "50px", marginTop: "55px", }
  return (
    <div>
      <Box sx={mainBoxStyle}>
        {!matches &&<Box
        width={1700}
        marginLeft={13}
        marginTop={10}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        borderBottom={"3px solid #FE8D32"}
        paddingBottom={2}
        >
        <Typography
          marginLeft={95}
          variant="h4"
          fontFamily={"inherit"}
          fontStyle="normal"
          fontWeight="700"
          fontSize="35px"
          lineHeight={"42px"}
          color={"#FE8D32"}
        >
        Add Video</Typography>
        </Box> }

        <Box>
            <Box sx={UploadBoxStyle} >
              <Typography component={"div"} sx={TypoBoxStyle}>
              Upload Video File
              </Typography>
              <Box sx={inputFileBox}>
              <input type="file" id="profilepic" />
              </Box>
              {!matches &&<Typography>
                <h3 style={{marginLeft:"70px"}}>OR</h3><br></br>
                <span style={{marginRight:"50px"}}>Drag and Drop in this area</span>
              </Typography>}
             </Box>

        </Box>

        <Box sx={VideoTitleBox} >
        <Typography sx={VideoTypoTitle} >
        Video Title</Typography>
        <TextField
          style={textAreaStyle}
          placeholder="MultiLine with rows: 2 and rowsMax: 4"
          multiline
          rows={7}
          maxRows={8}
        />
        </Box>

          <Box sx={selectorMainBoxStyle} >
            <Box>
                <Typography sx={VideoTypoTitle} >
                Sports</Typography>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"> Select Sports</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" style={selectStyle} value={''} label="Sort by" onChange={(e) => {}} >
                    <MenuItem value={"Recent"}>Recent</MenuItem>
                    <MenuItem value={"Newer"}>Newer</MenuItem>
                    <MenuItem value={"Long"}>Long</MenuItem>
                </Select>
                </FormControl>
            </Box>
            <Box>
                <Typography sx={VideoTypoTitle} >
                Player</Typography>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Player</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" style={selectStyle}  value={''} label="Sort by" onChange={(e) => {}} >
                    <MenuItem value={"Recent"}>Recent</MenuItem>
                    <MenuItem value={"Newer"}>Newer</MenuItem>
                    <MenuItem value={"Long"}>Long</MenuItem>
                </Select>
                </FormControl>
            </Box>
        </Box>
        <Button variant="contained" color="warning" sx={ButtonStyle} >
          Upload
        </Button>
      </Box>
    </div>
  )
}
