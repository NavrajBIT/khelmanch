
import React from 'react';
import {Box, Typography } from '@mui/material';
import KhelVideo from "../../Video/KhelVideo";
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export const VideoCardHome = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
  return (
    <div>
            {!matches && <Box sx={{ width: "500px", height: "450px", margin: "auto", mt: 2, padding: 0, marginLeft: 10, background: "#ED842E", boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, borderRadius: 8, }} >
              <Box style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", color: "rgb(237, 234, 234)"}}> 
                <Box mt={3} marginRight={27} style={{ padding: "20px 20px 0px 20px", display: "flex", marginBottom: "15px", color: "rgb(237, 234, 234)" }} >
                    <img
                      style={{ height: "50px", width: "50px", borderRadius: "100px", marginRight: "10px", color: "rgb(237, 234, 234)" ,border: "3px solid #ccc" }}
                      src={
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                      }
                      alt=""
                      onClick={() => {
                        navigate("/profile");
                      }}
                    />
                    <Typography mt={1} marginLeft={1.5} style={{ color: "rgb(237, 234, 234)",fontFamily: 'Product Sans', fontStyle: "normal", fontWeight: "700", fontSize: "20px", lineHeight: "24px"}} >Coach Priti Kaur</Typography>
                </Box>
                  <KhelVideo
                    src={"https://www.youtube.com/embed/Ctt-tZ_9KpY"}
                    title={"Dharamender playing Cricket"}
                    player={"Dharamender Singh"}
                    sport={"Cricket"}
                    rating="3.5"
                  />
              </Box>
            </Box> }

           {matches &&<Box style={{ display: "flex", flexDirection:"column", justifyContent: "center"}}>
             
                  <Box style={{ border: "1px solid #000000", backgroundColor:"white", borderRadius: "10px", margin: "10px", }}> 
                    <Box key={"Mahender playing Cricket"} style={{marginTop: "30px"}}>
                      <span style={{color:'black'}}><KhelVideo
                        src={"https://www.youtube.com/embed/ByZ7fkKSkNs"}
                        title={"Dharamender playing Cricket"}
                        player={"Dharamender Singh"}
                        sport={"Cricket"}
                        rating="3.5"
                      /></span>
                    </Box>
                  </Box>
                  <Box style={{ border: "1px solid #000000", borderRadius: "10px", margin: "10px", }}> 
                    <Box key={"Mahender playing Cricket"} style={{marginTop: "30px"}}>
                      <span style={{color:'black'}}><KhelVideo
                        src={"https://www.youtube.com/embed/Ctt-tZ_9KpY"}
                        title={"Dharamender playing Cricket"}
                        player={"Dharamender Singh"}
                        sport={"Cricket"}
                        rating="3.5"
                      /></span>
                    </Box>
                  </Box>
            </Box>
            } 
    </div>
  )
}
