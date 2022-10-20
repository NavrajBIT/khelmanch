import React from 'react';
import { Typography, Box ,AppBar,Toolbar,} from '@mui/material';
import imaggeArrow from "../../../Images/arrow.png";
import imageSearch from "../../../Images/Vector.png";
import imageReward from "../../../Images/Vector2.png";
import imagevideo from "../../../Images/Rectangle92.png";
export const Container3rd = () => {
  return (
    <div>
                <AppBar position="static" sx={{margin: "auto",marginTop: 10,marginBottom: 8,height: "250px",width: "1645px",borderRadius: 8,border: "1px solid #ED842E",background: " transparent",}}alignItems="center">
          <Toolbar>
            <Box marginTop={5} marginLeft={35} display={"flex"} flexDirection="row" ustifyContent="space-between" alignItems={"center"}>
              <Box>
                <Typography fontFamily={"Inter"} fontWeight={600} fontSize={46} fontStyle={"normal"} style={{ lineHeight: "56px", color: "#ED842E", letterSpacing: "-0.02em", }} margin="auto" >
                  Identify<br></br>{" "}
                  <span style={{ color: "black" }}>Talent</span>
                </Typography>
                <img alt="KhelManch" src={imageSearch} style={{ width: "150px", height: "150px", marginLeft: "10px", marginTop: "1px", }} />
              </Box>

              <Box>
                <img alt="KhelManch" src={imaggeArrow} style={{ width: "45px", height: "45px", marginLeft: "60px", marginTop: "5px", }} />
              </Box>

              <Box marginLeft={20}>
                <Typography fontFamily={"Inter"} fontWeight={600} fontSize={46} fontStyle={"normal"} style={{ lineHeight: "56px", color: "#ED842E", letterSpacing: "-0.02em", }} margin="auto" >
                  Create<br></br>{" "}
                  <span style={{ color: "black" }}>Content</span>
                </Typography>
                <img alt="KhelManch" src={imagevideo} style={{ width: "150px", height: "150px", marginLeft: "10px", marginTop: "1px", }}
                />
              </Box>

              <Box>
                <img alt="KhelManch" src={imaggeArrow} style={{ width: "45px", height: "45px", marginLeft: "60px", marginTop: "5px", }}
                />
              </Box>

              <Box marginLeft={20}>
                <Typography fontFamily={"Inter"} fontWeight={600} fontSize={46} fontStyle={"normal"} style={{ lineHeight: "56px", color: "#ED842E", letterSpacing: "-0.02em", }} margin="auto" >
                  Recieve<br></br>{" "}
                  <span style={{ color: "black" }}>Rewards</span>
                </Typography>
                <img alt="KhelManch" src={imageReward} style={{ width: "150px", height: "150px", marginLeft: "10px", marginTop: "1px", }}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
    </div>
  )
}
