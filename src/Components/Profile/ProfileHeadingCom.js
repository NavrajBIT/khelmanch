import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export const ProfileHeadingCom = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const CoachHeadingStyle= matches ?{fontFamily: 'Myriad Pro', fontStyle: "normal", fontWeight: "600",fontSize: "15px", lineHeight: "21px"}:{fontFamily:"Inter", fontWeight:"700", fontSize:"25px", lineHeight:"30.26px", color:"#000000"}

    const HeaderBoxStyle = matches ? { width: "360px", height: "100%",borderTop:"1px solid rgba(0, 0, 0, 0.1)", margin: "auto", marginTop: "20px", positions: "absolute", paddingTop: "50px", background: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", } :{ width: "100vw", height: "55vh", margin: "auto", marginTop: 200, positions: "absolute", mt: 10, padding: "20px", background: "#FE8D3233", display: "flex", flexDirection: "row", justifyContent: "space-between", }
    const CoachImageStyle = matches ? {position: "relative", marginLeft:"10px", width: "100px", height: "100px", borderRadius: "50%", border: "1px solid white", } : { width: "23vw", height: "48vh", marginLeft: "20px", marginTop: "20px", borderRadius: "10px", }
    const CoachNameStyle = matches ? { mt:"15px",fontFamily: "Inter", fontWeight: "600", fontSize: "18px", lineHeight: "22.26px", color: "#000000",marginLeft:"40px" } : {fontFamily:"Inter" ,fontWeight:"700" ,fontSize:"2.5vw" }
    const childBoxStyle = matches ? { } : { marginLeft:"5%", display:"flex", flexDirection:"column" }
    const childBoxStyle2 = matches ? { } : {marginTop:"2%" ,display:"flex", flexDirection:"row"  }
    const sportBoxStyle = matches ? {marginTop:"80px",position: "absolute" ,marginLeft:"-130px",width:"80px", height:"25px" ,border:"1px solid black", borderRadius:"10px", padding:"0px", paddingBottom:"4px" ,alignItems:"center"} : { width:"100px", height:"30px", marginLeft:"5%", marginTop:"25px" ,textAlign:"justify" ,border:"2px solid black", borderRadius:"10px", padding:"0px", paddingBottom:"20px" ,alignItems:"center" }
    const sportTypoStyle = matches ? {marginBottom:"1px" ,marginLeft:"12px", fontFamily:"Inter", fontWeight:"600", fontSize:"15px"}:{marginBottom:"20px" ,marginLeft:"17px", fontFamily:"Inter", fontWeight:"600", fontSize:"1vw"}
    const CoachFollwerBox = matches ? {marginRight:"10px",borderTop:"1px solid rgba(0, 0, 0, 0.1)",marginTop:"5px", display:"flex", flexDirection:"row",}:{marginTop:"35px", display:"flex", flexDirection:"row"};
    const marginStyleFollwerCoaching = matches ? 2:10;
    const CoachBioStyle = matches ? {fontFamily: 'Open Sans',fontStyle: "normal",fontWeight:" 400", fontSize: "10px", lineHeight: "14px", textAlign: "justify"," color": "rgba(0, 0, 0, 0.7)",}:{fontFamily:"Inter", fontWeight:"400", fontSize:"1vw", lineHeight:"30.26px", color:"#000000", marginTop:"3%",textAlign:"justify" }
    const CoachBioStyleBox = matches ?{width: "360px",padding:"10px",position:"relative",marginTop:"60px",marginLeft:"-140px"}:{}
  return (
    <div>
    <Box sx={HeaderBoxStyle} >
          <Box>
          <img alt="Coach Profile" src={props.ImgUrl} style={CoachImageStyle} />
          </Box>

          <Box sx={childBoxStyle}>
            <Box sx={childBoxStyle2}>
              <Typography sx={CoachNameStyle}>{props.coach && <span style={{color:"#FE8D32"}}>Coach</span>} {props.coachName}</Typography>
              
              <Box sx={sportBoxStyle}>
              <Typography sx={sportTypoStyle} >{props.sport}</Typography>
              </Box>

              {!matches && <Box marginTop={2.3} marginLeft={"45%"} >
                <IconButton>
                  <EditIcon fontSize="large" sx={{border: "1px solid ",borderRadius: "100px",padding: "5px"}} />
                </IconButton>
                <IconButton>
                  <MoreVertIcon fontSize="large" sx={{border: "1px solid ",borderRadius: "100px",padding: "5px"}} />
                </IconButton>
              </Box>}
            </Box>

            <Box sx={CoachFollwerBox} >
              <Typography style={CoachHeadingStyle} >
                {props.Videos} <br /> 
                Videos
              </Typography>
              <Typography style={CoachHeadingStyle} marginLeft={marginStyleFollwerCoaching}>
                {props.Followers} <br /> 
                Followers
              </Typography>
              <Typography style={CoachHeadingStyle} marginLeft={marginStyleFollwerCoaching} >
                {props.Coachings} <br /> 
                Coaching
              </Typography>

            </Box>

            <Box sx={CoachBioStyleBox}>
              <Typography sx={CoachBioStyle} >
                {props.bio}
               </Typography>
            </Box>

            
          </Box>

        </Box>
    </div>
  )
}
