import React from 'react';
import { Typography,AppBar,Toolbar} from '@mui/material';

export const Container2nd = () => {
  return (
    <div>
        <AppBar position="static" sx={{margin: "auto",marginTop: 40,marginBottom: 8,height: "88px",width: "991px",borderRadius: 8,padding: 2,background: " #ED842E",}}>
          <Toolbar>
            <Typography fontFamily={"Product Sans"} fontWeight={700} fontSize={50} fontStyle={"normal"} style={{lineHeight: "61px",color: "white",letterSpacing: "-0.02em",}}margin="auto">
              Become a Content - Creator
            </Typography>
          </Toolbar>
        </AppBar>  
    </div>
  )
}
