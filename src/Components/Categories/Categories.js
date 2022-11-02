import React, { useState } from "react";
import "./Categories.css";
import KhelVideo from "../Video/KhelVideo";
import { useNavigate } from "react-router-dom";
import videosData from "../../Data/VidesData";
import { Box,FormControl,InputLabel,MenuItem,Select,Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { VideoCard } from "../Profile/VideoCard";

const Categories = () => {
  const [open, setOpen] = React.useState(true);

  const SPORTS = ["Cricket", "Football", "Basketball", "Tennis", "Badminton", "Volleyball", "Table Tennis", "Chess", "Carrom", "Other"];

  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const mainBoxStyle = matches ? {margin:"auto"}:{margin:"auto",padding:"10px"}
  const HeaderBoxStyle = matches?{with:"360px" ,height:"350px",borderTop:"1px solid rgba(0, 0, 0, 0.2)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",margin:"auto",padding:"10px",backgroundColor:"white",marginTop:"20px",alignItems:"center",display:"flex",flexDirection:"column"}:{mt:"20px",with:"90vw" ,height:"500px",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",margin:"auto",padding:"10px",backgroundColor:"white",alignItems:"center",display:"flex",flexDirection:"column"}
  const HeaderTypoStyle = matches ?{ color: "#FE8D32", fontFamily: "Times New Romen", fontStyle: "normal", fontWeight: "700", fontSize: "45px", }:{ color: "#FE8D32", fontFamily: "Times New Romen", fontStyle: "normal", fontWeight: "700", fontSize: "4vw", }
  const HeaderChildTypoStyle = matches ?{color: "black", fontFamily: "Product Sans", fontStyle: "normal", fontWeight: "400", fontSize: "18px",marginTop:"20px"}:{ color: "black", fontFamily: "Inter", fontStyle: "normal", fontWeight: "600", fontSize: "2vw", marginLeft: "5%"}
  const SpanStyle = matches ? { color: "black", marginLeft: "45px" }:{ color: "black", marginLeft: "21%" }
  return (
    <>
    <Box sx={mainBoxStyle}>
      <Box sx={HeaderBoxStyle}>
        <Typography style={HeaderTypoStyle} >
            View and Rate <br></br>
            <span style={SpanStyle}>
              the videos
            </span>
          </Typography>
          <Typography style={HeaderChildTypoStyle} >
            {!matches &&<> Khelmanch enables people to identify and select the<br></br> 
            <span style={{ color: "black", marginLeft: "120px" }}>
            talents to next level of their career.
            </span></> }
            {matches &&<> 
            <span style={{marginLeft:"12px"}}> Khelmanch enables people to</span> <br></br>
            <span style={{marginLeft:""}}> identify and select the  talents to </span><br></br>
            <span style={{marginLeft:"35px"}}>next level of their career.</span>
            </>}
          </Typography>
      </Box>


      {!matches && <Box sx={{display:"flex",flexDirection:"row",width:"100vw",height:"100%",margin:"auto"}}>
        <Box sx={{width:"15%",height:"100%",background:"white"}}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Category"sx={{color:"#FE8D32",fontFamily: 'Inter', fontStyle: "normal", fontWeight: "700", fontSize: "80px", lineHeight: "108.92%"}} />
                  {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {SPORTS.map((sport) => {
                return (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{bgcolor: "rgba(254, 141, 50, 0.1)"}}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={sport} />
                  </ListItemButton>
                </List>
              </Collapse>
                );

              })}
          </List>
        </Box>
        <Box sx={{width:"85%",height:"100%",background:"white"}}>
          
          <VideoCard />
        </Box>

      </Box>}
      {matches && <Box sx={{display:"flex",flexDirection:"column",width:"360px",height:"100%",margin:"auto"}}>

          <Box sx={{margin:"auto",width:"360px",padding:"20px"}}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" sx={{fontSize:"15px",color:"#FE8D32",fontWeight:"700",margin:"10px",marginLeft:"35px"}}> Category</InputLabel>
                      <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{width: "200px",marginTop:"10px"}} value={''} label="Sort by" onChange={(e) => {}} >
                          <MenuItem value={"Recent"}>Cricket</MenuItem>
                          <MenuItem value={"Newer"}>Hockey</MenuItem>
                          <MenuItem value={"Long"}>Cricket</MenuItem>
                      </Select>
                </FormControl>
          </Box>
          <Box>
            <Box sx={{margin:"auto",width:"360px",padding:"20px"}}>
              {videosData.map((video) => {
                      return (
                      <Box style={{ marginTop:"5px", width:"320px", border: "1px solid #000000", backgroundColor:"white", borderRadius: "10px", }}> 
                      <Box key={video.title} style={{marginTop: "30px"}}>
                            <span style={{color:'black'}}><KhelVideo
                              src={video.src}
                              title={video.title}
                              player={video.name}
                              sport={video.sport}
                              rating="3.5"
                              coachName="Coach Priti Kaur"
                            /></span>
                          </Box>
                      </Box>
                      );
                      })}
            </Box>
          </Box>
      </Box>}

    </Box>

    </>
  );
};

export default Categories;
