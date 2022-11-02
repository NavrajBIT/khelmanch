import React from 'react'
import {Box,Tab,Tabs, Typography, Button,TextField} from "@mui/material";
import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import BITlogo from "../../Images/BITlogo.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




const Footer = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [inputs, setinput] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const mainBoxStyle = matches ? {width: "100%", height: "1550px", display: "flex", justifyContent: "space-around", background: "#262626", color: "#fff", marginTop: "100px", flexDirection: "column", } : {width: "100%", height: "600px", display: "flex",justifyContent: "space-around", background: "#262626", color: "#fff", marginTop: "100px", flexDirection: "row",}
  const parentBoxStyle= matches ? {width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",} :{ width: "33%", display: "flex", justifyContent: "center", flexDirection: "column",  marginBottom: "10px", mt:"10px" }
  const parentBoxStyleContact= matches ? {width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",} :{border: "1px solid #fff", width: "33%", display: "flex", justifyContent: "center", flexDirection: "column",  marginBottom: "10px", mt:"10px" }
  const childBoxStyle = matches ? {width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"} :{display:"flex" ,flexDirection:"column", alignItems:"center" ,justifyContent:"center" ,padding:"3px" ,margin:"auto" ,borderRadius:"5px", marginBottom:"2px"}
  const TypographyStyle = matches ? {fontFamily: "Inter", fontStyle: "normal", fontWeight: "700", fontSize: "30px", lineHeight: "22px", textAlign: "center",marginBottom:"20px" } : {fontFamily:"ui-monospace", padding:"3px",fontSize: "1.3vw",fontWeight: "700", marginRight:"40%" }
  const inputStyle = matches ? {background: "white", width: "320px" } :{background: "white", width: "20vw" }
  const textareaStyle = matches ? { width: "320px" ,backgroundColor:"white" } :{ width: "20vw" ,backgroundColor:"white" }
  const buttonStyle = matches ? {borderRadius: 0,marginTop: 3 ,width:"245px",height:"55px"} :{borderRadius: 1, marginTop: 3 ,marginRight:"36%",width:"8vw",height:"5vh",fontSize:"0.7vw"}

  const parentBoxStyle2 = matches ? {width: "320px", height: "360px", display: "flex", justifyContent: "center", flexDirection: "column", marginBottom: "50px", border: "1px solid #fff", borderRadius: "5px",mt:5} :{width: "30vw", height: "360px", display: "flex", justifyContent: "center", flexDirection: "column", marginBottom: "50px", border: "1px solid #fff", borderRadius: "5px", }
  const TypographyStyle2= matches ? {fontFamily:"ui-monospace", padding:"3px",fontSize: "25px",fontWeight: "600", } : {fontFamily:"ui-monospace", padding:"3px", marginRight:"45px",fontSize: "25px",fontWeight: "600", }
  const childBoxStyle2 = matches ? {width: "320px", } :{width: "25vw", }
  const TypographyStyle3= matches ?{fontFamily:"Inter", fontStyle:"normal" ,fontWeight:"100" ,fontSize:"7px"}:{fontFamily:"Inter", fontStyle:"normal" ,fontWeight:"300" ,fontSize:"15px"}
  const ContactDetailsStylePhone= matches ?{ marginRight: "55px", fontSize: "15px", fontWeight: "500", }:{ marginRight: "100px", fontSize: "1.3vw", fontWeight: "500", }
  const ContactDetailsStyleEmail= matches ?{ marginRight: "21px", fontSize: "15px", fontWeight: "500", }:{ marginRight: "21px", fontSize: "1.3vw", fontWeight: "500", }
  const handleSubmit = (e) => {
      e.preventDefault();
      
    };
  return (
    <Box sx={{width: "auto" }}>
    <Box sx={mainBoxStyle} >
        {/* Box -1 Contact Us */}

        <Box sx={parentBoxStyle} >

          <form onSubmit={handleSubmit}>
            <Box sx={childBoxStyle}>
              <Typography sx={TypographyStyle} >
                Contact Us
              </Typography>

              <TextField style={inputStyle} name="name" onChange={handleChange} value={inputs.name} type="text" placeholder="Name" margin="normal" />
              <TextField style={inputStyle} name="email" onChange={handleChange} value={inputs.email} type="email" placeholder="Email" margin="normal" />
              <TextField
                style={textareaStyle}
                placeholder="Write a Message"
                multiline
                rows={7}
                maxRows={8}
              />
              <Button type="submit" variant="contained" sx={buttonStyle} color="warning" >
                Send Message
              </Button>
            </Box>
          </form>
          
        </Box>

        <Box sx={parentBoxStyle} >
        {!matches&&<><Typography fontFamily={"ui-monospace"} variant="h5" padding={0} marginRight={37} marginBottom={3} >
            Contact Details
          </Typography></>}
          <Box sx={parentBoxStyle2}>
            <Typography style={ContactDetailsStylePhone} fontFamily={"Inter"} fontStyle={"normal"} padding={3} textAlign={"center"} >
              <LocalPhoneIcon sx={{ color: "#ED842E"}}  style={{ marginRight: "5px"}} /> +91 1234567890
              </Typography>
              <Typography style={ContactDetailsStylePhone}  fontFamily={"Inter"} fontStyle={"normal"} padding={3} textAlign={"center"} >
                <LocalPhoneIcon sx={{ color: "#ED842E" }} style={{ marginRight: "5px" }} /> +91 1234567890
              </Typography>
              <Typography style={ContactDetailsStyleEmail}  fontFamily={"Inter"} fontStyle={"normal"} padding={3} textAlign={"center"} >
                <EmailIcon sx={{ color: "#ED842E" }} style={{ marginRight: "5px" }} /> khelmanch@gmail.com
              </Typography>
              <Typography style={ContactDetailsStyleEmail}  fontFamily={"Inter"} fontStyle={"normal"} padding={3} textAlign={"center"} >
                <EmailIcon sx={{ color: "#ED842E" }} style={{ marginRight: "5px" }} /> khelmanch@gmail.com
              </Typography>
            </Box>


        </Box>

        <Box sx={parentBoxStyle} >
          <Typography sx={TypographyStyle2} >
            Important links
          </Typography>
          <Box sx={childBoxStyle2} borderTop= {"1px solid"} >
            <Tabs >
              <Tab style={{ color:" #000000", fontFamaily: "Inter", fontStyle: "normal", fontWeight: "300", fontSize: "12px", color: "#fff", textDecoration:"underline" }} label="Explore" />
              <Tab style={{ color:" #000000", fontFamaily: "Inter", fontStyle: "normal", fontWeight: "300", fontSize: "12px", color: "#fff", textDecoration:"underline" }} label="Wallet" />
            </Tabs>
          </Box>
          <Box position={"relative"} marginTop={35} >
            <span style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "300", }} >Made By</span>
            <img height={"100px"} width={"200px"}  marginRight={"10px"} alt="BITLOGO" src={BITlogo} />
          </Box>


        </Box>
      </Box>

      <Box style={{ background: "black", color: "white", height: "70px", display: "flex", alignItems: "center", justifyContent: "center", }} >
        <Box >
          <Typography sx={TypographyStyle3} >
          Copyright © 2022 Beyond Imagination Technologies Pvt. Ltd. All right
          reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer