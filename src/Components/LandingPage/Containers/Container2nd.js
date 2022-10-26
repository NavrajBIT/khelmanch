import React from 'react';
import { Typography,AppBar,Toolbar} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Container2nd = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const AppBarStyle = matches ? {background: "white"} : {position:"static",margin: "auto",marginTop: 40,marginBottom: 8,height: "88px",width: "991px",borderRadius: 8,padding: 2,background: " #ED842E",}
  const TypographyStyle = matches ? {marginTop:"30px",fontFamily:"Product Sans",fontWeight:"700" ,fontSize:"40.88px", fontStyle:"normal", lineHeight: "61px",color: "#ED842E",letterSpacing: "-0.02em", } : {margin:"auto",fontFamily:"Product Sans",fontWeight:"700" ,fontSize:"50px", fontStyle:"normal", lineHeight: "61px",color: "white",letterSpacing: "-0.02em", }
  return (
    <div>
        {!matches && <AppBar  sx={AppBarStyle}>
          <Toolbar>
            <Typography sx={TypographyStyle}>
              Become a Content - Creator
            </Typography>
          </Toolbar>
        </AppBar> }
        {matches && <Typography sx={TypographyStyle}>
              <span style={{marginLeft:"60px"}}>Become a</span> <br></br>Content - Creator
            </Typography>}
    </div>
  )
}
