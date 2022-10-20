import React from 'react';
import { Card,CardContent ,CardMedia,Typography, Box ,Button} from '@mui/material';
import image1 from "../../../Images/image350.png";
import image2 from "../../../Images/image351.png";

export const Container1st = () => {
  return (
    <div>
        <Card sx={{width: "1646px",height: "1164px",margin: "auto",mt: 0,background: "#ED842E",}}>
          <CardMedia style={{ marginTop: "0p" }} component="img" height="723px" image={image1} alt="Paella dish" />
          <Box>
            <CardContent>
              <Typography color={"white"} sx={{fontWeight: "bold" ,marginLeft: "229px", marginTop: "50px",fontFamily: "Inter",fontStyle: "normal",}}variant="h4"component="div"size={50}>
                Explore the Top Talent in Sports
              </Typography>
            </CardContent>
          </Box>

          <Box style={{ zIndex: 2, marginTop: "10px", marginLeft: "250px" }} position="absolute" display="flex" justifyContent="center" alignItems="center" flexDirection="row" border="ActiveBorder">
            <Card sx={{width: "400px",height: "435px", margin: "auto",padding: "20px",mt: 5,boxShadow: "5px 5px 10px #ccc",":hover:": { boxShadow: "20px 20px 40px #ccc" },background: "white"}}>
              <Box>
                <CardContent>
                  <Typography color={"#ED842E"} sx={{ fontWeight: "bold" }} variant="h4" component="div">
                    KHEL<span style={{ color: "black" }}>MANCH</span>
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography size={24} fontWeight={400} fontFamily="Product Sans" fontStyle="normal" color={"#000000B2"}variant="h6">
                    Decentralized Talent Scouting Platform to Identify, Rate,
                    Select and Sponsor the Talent across the Country with the
                    help of Content Creators and the People.
                  </Typography>
                  <Typography mt={5}>Based on Polygon Network</Typography>
                </CardContent>
                <Button variant="contained" sx={{ background: "#ED842E",color: "white",fontStyle: "normal",marginLeft: "15px",latterSpacing: "0.5rem",}}>
                  Know more
                </Button>
              </Box>
            </Card>
            <Box style={{ marginLeft: "50px" }}>
              <img className="kheLlogo" alt="KhelManch" src={image2} />
            </Box>
          </Box>
        </Card>
    </div>
  )
}
