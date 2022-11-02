import React from 'react';
import { Typography, Box ,AppBar,Toolbar,} from '@mui/material';
import imaggeArrow from "../../../Images/arrow.png";
import imageSearch from "../../../Images/Vector.png";
import imageReward from "../../../Images/Vector2.png";
import imagevideo from "../../../Images/Rectangle92.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Container3rd = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const AppBarStyle = matches ? {position:"static",background: "white",margin:"auto"} : {position:"static",margin: "auto",marginTop: 10,marginBottom: 8,height: "250px",width: "80vw",borderRadius: 8,border: "1px solid #ED842E",background: " transparent",alignItems:"center"}
  const BoxStyle = matches ? {marginTop:"40px", display:"flex", flexDirection:"column" ,justifyContent:"space-between" ,alignItems:"center"} : {marginTop:"10px", paddingLeft:"10%",paddingRight:"150px", display:"flex", flexDirection:"row" ,justifyContent:"space-between" ,alignItems:"center"}
  const IconTypoBoxStyle = matches ? {paddingRight:"36px",width:"331px",height:"114px",borderRadius: 8,border: "1px solid #000000",display:"flex",flexDirection:"row-reverse"} : {}
  const ImageStyle= matches ? {width: "150px", height: "150px",} : { width: "10vw", height: "150px", marginLeft: "10px", marginTop: "1px", }
  const ArrowStyle = matches ? {width: "45px", height: "45px", marginLeft: "27px", marginTop: "10px",transform: "rotate(90deg)" } : { width: "45px", height: "45px", marginLeft: "9%", marginTop: "5px" }
  return (
    <div>
        <Box  sx={AppBarStyle}>
            <Box sx={BoxStyle}>
              <Box sx={IconTypoBoxStyle}>
                <Box>
                  <Typography fontFamily={"Inter"} fontWeight={600} fontSize={46} fontStyle={"normal"} style={{ lineHeight: "56px", color: "#ED842E", letterSpacing: "-0.02em", }} margin="auto" >
                    Identify<br></br>{" "}
                    <span style={{ color: "black" }}>Talent</span>
                  </Typography>
                </Box>
                <Box>
                    <img alt="KhelManch" src={imageSearch} style={ImageStyle} />
                </Box>
              </Box>

              <Box>
                <img alt="KhelManch" src={imaggeArrow} style={ArrowStyle} />
              </Box>

              <Box sx={IconTypoBoxStyle}>
                <Typography fontFamily={"Inter"} fontWeight={600} fontSize={46} fontStyle={"normal"} style={{ lineHeight: "56px", color: "#ED842E", letterSpacing: "-0.02em", }} margin="auto" >
                  Create<br></br>{" "}
                  <span style={{ color: "black" }}>Content</span>
                </Typography>
                <img alt="KhelManch" src={imagevideo} style={{ width: "150px", height: "150px", marginLeft: "10px", marginTop: "1px"}}
                />
              </Box>

              <Box>
                <img alt="KhelManch" src={imaggeArrow} style={ArrowStyle} 
                />
              </Box>

              <Box sx={IconTypoBoxStyle}>
                <Typography fontFamily={"Inter"} fontWeight={600} fontSize={46} fontStyle={"normal"} style={{ lineHeight: "56px", color: "#ED842E", letterSpacing: "-0.02em", }} margin="auto" >
                  Recieve<br></br>{" "}
                  <span style={{ color: "black" }}>Rewards</span>
                </Typography>
                <img alt="KhelManch" src={imageReward} style={{ width: "150px", height: "150px", marginLeft: "10px", marginTop: "1px", }}
                />
              </Box>
            </Box>
        </Box>
    </div>
  )
}
