import React from 'react';
import { Card,CardContent ,Typography, Box ,} from '@mui/material';
import image4 from "../../../Images/Rectangle789.png";
import imagepolygon from "../../../Images/Polygon4.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export const Container4th = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const CardStyle = matches ? { width: "360px", height: "255px", margin: "auto", positions: "absolute", mt: 10, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, backgroundImage: `url(${image4})`, } : { width: "90vw", height: "670px", margin: "auto", positions: "absolute", mt: 0, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, backgroundImage: `url(${image4})`, }
  const ImageStyle = matches ? { width: "118px", height: "102px", marginLeft: "20px", marginTop: "20px", } : { width: "20vw", height: "40vh", marginLeft: "20px", marginTop: "20px", }
  const TypographyStyle = matches ? { color: "white", fontFamily: "Product Sans", fontSize: "normal", fontSize: "20px", fontWeight: "400", } : { color: "white", fontFamily: "Product Sans", fontSize: "normal", fontSize: "2.5vw", fontWeight: "400", } 
  return (
    <div>
        <Card sx={CardStyle} >
          <CardContent sx={{ background: "rgba(0,0,0,0.5)", color: "white", height: "100%", width: "100%", padding: "20px", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", }} >
            <Box position={"absolute"} zIndex={1}>
              <img alt="KhelManch" src={imagepolygon} style={ImageStyle} />
            </Box>

            <Box position={"absolute"} zIndex={2}>
              <Typography style={TypographyStyle} margin="auto" >
                Khelmanch enables people to<br></br>
                identify and select the talents<br></br>
                to next level of their career.
              </Typography>
            </Box>
          </CardContent>
        </Card>
    </div>
  )
}
