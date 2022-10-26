import React from 'react';
import { Typography, Box ,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { Container1st } from './Containers/Container1st';
import { Container2nd } from './Containers/Container2nd';
import { Container3rd } from './Containers/Container3rd';
import { Container4th } from './Containers/Container4th';
import { Container5th } from './Containers/Container5th';
import { Container6th } from './Containers/Container6th';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




export const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const TypographyStyle1= matches ? {marginTop:"30px",fontFamily:"Times New Roman",fontWeight:"700" ,fontSize:"20.75px", fontStyle:"normal", lineHeight: "25.17px",color: "#000000",letterSpacing: "-0.02em", } : {color: "#000000",fontFamily: "Times New Roman",fontStyle: "normal",fontWeight: "700",fontSize: "51.1px",lineHeight: "59px",margin:"auto" }
  const TypographyStyle2= matches ? {fontSize:"300", color: "black", fontFamily: "Oswald", fontStyle: "normal", fontSize: "30px", }:{ color: "black", fontFamily: "Inter", fontStyle: "normal", fontSize: "64px", }
  

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" border="ActiveBorder">
        <Container1st />

         <Container2nd />

        <Typography sx={TypographyStyle1}>
            Help the Budding Talent of India
        </Typography>

        <Container3rd />
        <Container4th />

         <Typography style={TypographyStyle2} margin="auto" marginTop={5} >
            Follow the steps to join us
        </Typography>
        <Container5th />

        <Container6th />
        { !matches && <Typography style={{ color: "#FE8D32", fontFamily: "Times New Romen", fontStyle: "normal", fontWeight: "700", fontSize: "90px", }} margin="auto" mt={30} >
          View and Rate <br></br>
          <span style={{ color: "black", marginLeft: "100px" }}>
            the videos
          </span>
        </Typography>}
        <Button LinkComponent={Link} to="/explore" variant="outlined" sx={{ marginTop: "20px", background: "white", color: "black", fontWeight: "bold", fontFamily: "Product Sans", fontStyle: "normal", marginLeft: "15px", height: "50px", width: "250px", borderRadius: "10px", border: "2px solid black", marginTop: "55px", }} >
          Explore more
        </Button> 
      </Box>
    </div>
  );
}
