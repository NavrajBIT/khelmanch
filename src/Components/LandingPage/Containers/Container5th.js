import React from 'react';
import {Typography, Box ,Button} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Container5th = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const mainBoxStyle = matches ? { width: "360px", height: "261px", margin: "auto", marginTop: 10, positions: "absolute", mt: 10, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, padding: "10px", background: "#ED842E", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" } :{ width: "60vw", height: "65vh", margin: "auto", marginTop: 10, positions: "absolute", mt: 10, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, padding: "20px", background: "#ED842E", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 8, }
  const TypographyStyle = matches ? {marginTop:"30px",color: "white", fontFamily: "Inter", fontSize: "18px", fontWeight: "600", fontStyle: "normal", } : { color: "white", fontFamily: "Inter", fontSize: "2.5vw", fontWeight: "600", fontStyle: "normal",}
  const ButtonStyle = matches ? {  marginTop:"80px",background: "black", color: "white", marginLeft: "15px", fontFamily: "Product Sans", fontWeight: "700", fontStyle: "normal", fontSize: "20px",  } : {  background: "white", color: "black", marginLeft: "15px", fontFamily: "Product Sans", fontWeight: "700", fontStyle: "normal", fontSize: "1.75vw",  }
  const SpanStyle = matches ?{padding:"40px" }:{ margin: "40px" }
  return (
    <div>
        <Box sx={mainBoxStyle} >
          <Typography style={TypographyStyle} margin="auto" >
            <span style={SpanStyle}>Step 1. Content your wallet</span>
            <br></br>
            <span style={SpanStyle}>Step 2. Create your profile</span>
            <br></br>
            <span style={SpanStyle}>
              Step 3. Create talent's profile
            </span>
            <br></br>
            <span style={SpanStyle}>
              Step 4. Uplade talent's videos
            </span>
          </Typography>

                    
          <Button variant="contained" disableElevation sx={ButtonStyle} >
            Connect your wallet
          </Button>

          {/* <button className="walletBtn">Connect your wallet</button> */}
          {/* 

          <Tabs>
            <Tab
              style={{
                color: "white",
                fontFamily: "Product Sans",
                fontStyle: "normal",
              }}
              label="Learn more about Blockchain Wallet"
            />
          </Tabs> */}
          {!matches&&<a style={{ color: "white", fontFamily: "Product Sans",marginTop:"10px", fontStyle: "normal", cursor: "pointer", textDecoration: "none", }} >
            Learn more about{" "}
            <span style={{ textDecoration: "underline" }}>
              Blockchain Wallet
            </span>
          </a>}
        </Box>
    </div>
  )
}
