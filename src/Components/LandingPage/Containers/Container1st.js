import React from 'react';
import { Card,CardContent ,CardMedia,Typography, Box ,Button} from '@mui/material';
import image1 from "../../../Images/image350.png";
import image2 from "../../../Images/image351.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Container1st = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const CardStyle = matches ? {zIndex:-1,width: "100%", height: "609px",margin: "auto",mt:5,background: "#ED842E",position:"relative"}:{width: "1646px",height: "1164px",margin: "auto",mt:12,background: "#ED842E"}
  const CardMediaStyle = matches ? {marginTop: "0p",height:"170px"} : {marginTop: "0p",height:"723px"}
  const CardContentTypoStyle = matches ? {marginLeft:"30px",fontWeight: "bold", marginTop: "10px",fontFamily: "Inter",fontStyle: "normal",fontSize:"20px"}:{fontWeight: "bold" ,marginLeft: "229px", marginTop: "50px",fontFamily: "Inter",fontStyle: "normal",fontSize:"50px"}
  const BoxStyle=matches?{position:"relative"}:{ zIndex: 2, marginTop: "10px", marginLeft: "250px" , position:"absolute", display:"flex", justifyContent:"center" ,alignItems:"center", flexDirection:"row", border:"ActiveBorder"}
  const CardStyle2 = matches ? {zIndex:2,width: "250px",height: "250px", margin: "auto",padding: "0px",mt: 5,boxShadow: "5px 5px 10px #ccc",":hover:": { boxShadow: "20px 20px 40px #ccc" },background: "white"}:{width: "400px",height: "435px", margin: "auto",padding: "20px",mt: 5,boxShadow: "5px 5px 10px #ccc",":hover:": { boxShadow: "20px 20px 40px #ccc" },background: "white"}
  const ImageBoxStyle= matches?{zIndex:-1,position:"absolute",padding:"0px" ,marginLeft:"-27px",marginTop:"-360px"}:{marginLeft: "50px" }
  const ImageStyle = matches ? {width:"450px" ,height: "450px",} : {}
  const TypoStyle= matches ?{mt:"-30px",fontSize:"15px", fontWeight:"400", fontFamily:"Product Sans", fontStyle:"normal", color:"#000000B2"}:{fontSize:"22px", fontWeight:"400", fontFamily:"Product Sans", fontStyle:"normal", color:"#000000B2"}
  return (
    <div>
        <Card sx={CardStyle}>
          <CardMedia style={CardMediaStyle} component="img"  image={image1} alt="Paella dish" />
          <Box>
            <CardContent sx={{}}>
              <Typography color={"white"} sx={CardContentTypoStyle}>
                Explore the Top Talent in Sports
              </Typography>
            </CardContent>
          </Box>

          <Box sx={BoxStyle}>
            <Card sx={CardStyle2}>
              <Box>
                <CardContent>
                  <Typography sx={{ fontWeight: "bold",color:"#ED842E" ,fontSize:"35px"}}  component="div">
                    KHEL<span style={{ color: "black" }}>MANCH</span>
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography sx={TypoStyle} >
                    Decentralized Talent Scouting Platform to Identify, Rate,
                    Select and Sponsor the Talent across the Country with the
                    help of Content Creators and the People.
                  </Typography>
                  <Typography mt={1}>Based on Polygon Network</Typography>
                </CardContent>
               {!matches&& <Button variant="contained" sx={{ background: "#ED842E",color: "white",fontStyle: "normal",marginLeft: "15px",latterSpacing: "0.5rem",}}>
                  Know more
                </Button>}
              </Box>
            </Card>
            {matches&& <Button variant="contained" sx={{mt:"12px", background: "#ED842E",color: "white",fontStyle: "normal",marginLeft: "110px",latterSpacing: "0.5rem",}}>
                  Know more
                </Button>}
            <Box style={ImageBoxStyle}>
              <img style={ImageStyle} className="kheLlogo" alt="KhelManch" src={image2} />
            </Box>
          </Box>
        </Card>
    </div>
  )
}
