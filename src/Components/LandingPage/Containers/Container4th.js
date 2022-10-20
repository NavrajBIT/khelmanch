import React from 'react';
import { Card,CardContent ,Typography, Box ,} from '@mui/material';
import image4 from "../../../Images/Rectangle789.png";
import imagepolygon from "../../../Images/Polygon4.png";

export const Container4th = () => {
  return (
    <div>
        <Card sx={{ width: "1646px", height: "670px", margin: "auto", positions: "absolute", mt: 0, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, backgroundImage: `url(${image4})`, }} >
          <CardContent sx={{ background: "rgba(0,0,0,0.5)", color: "white", height: "100%", width: "100%", padding: "20px", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", }} >
            <Box position={"absolute"} zIndex={1}>
              <img alt="KhelManch" src={imagepolygon} style={{ width: "350px", height: "350px", marginLeft: "20px", marginTop: "20px", }} />
            </Box>

            <Box position={"absolute"} zIndex={2}>
              <Typography style={{ color: "white", fontFamily: "Product Sans", fontSize: "normal", fontSize: "45px", fontWeight: "400", }} margin="auto" >
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
