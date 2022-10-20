import React from 'react';
import {Typography, Box ,Button} from '@mui/material';

export const Container5th = () => {
  return (
    <div>
        <Box sx={{ width: "1028.92px", height: "647.79px", margin: "auto", marginTop: 10, positions: "absolute", mt: 10, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, padding: "20px", background: "#ED842E", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 8, }} >
          <Typography style={{ color: "white", fontFamily: "Inter", fontSize: "42.34px", fontWeight: "600", fontStyle: "normal", }} margin="auto" >
            <span style={{ margin: "15px" }}>Step 1. Content your wallet</span>
            <br></br>
            <span style={{ margin: "15px" }}>Step 2. Create your profile</span>
            <br></br>
            <span style={{ margin: "15px" }}>
              Step 3. Create talent's profile
            </span>
            <br></br>
            <span style={{ margin: "15px" }}>
              Step 4. Uplade talent's videos
            </span>
          </Typography>

                    
          <Button variant="contained" disableElevation sx={{ background: "white", color: "black", marginLeft: "15px", fontFamily: "Product Sans", fontWeight: "700", fontStyle: "normal", fontSize: "28.127px", }} >
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
          <a style={{ color: "white", fontFamily: "Product Sans",marginTop:"10px", fontStyle: "normal", cursor: "pointer", textDecoration: "none", }} >
            Learn more about{" "}
            <span style={{ textDecoration: "underline" }}>
              Blockchain Wallet
            </span>
          </a>
        </Box>
    </div>
  )
}
