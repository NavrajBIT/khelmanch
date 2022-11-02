
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
             {!matches && 
            <Box style={{ border: "1px solid #000000", borderRadius: "10px", margin: "10px",backgroundColor:"white" }}> 
            <Box key={"Mahender playing Cricket"} style={{marginTop: "30px"}}>
              <span style={{color:'black'}}><KhelVideo
                  src={"https://www.youtube.com/embed/Ctt-tZ_9KpY"}
                  title={"Dharamender playing Cricket"}
                  player={"Dharamender Singh"}
                  sport={"Cricket"}
                  rating="3.5"
                   coachName="Coach Priti Kaur"
              /></span>
            </Box>
          </Box> } 
            

           {matches &&<Box style={{ display: "flex", flexDirection:"column", justifyContent: "center"}}>
             
              <Box style={{ marginTop:"5px", width:"320px", border: "1px solid #000000", backgroundColor:"white", borderRadius: "10px",margin:"auto"}}> 
                  <Box key={"Mahender playing Cricket"} style={{marginTop: "30px"}}>
                      <span style={{color:'black'}}><KhelVideo
                       src={"https://www.youtube.com/embed/Ctt-tZ_9KpY"}
                       title={"Dharamender playing Cricket"}
                       player={"Dharamender Singh"}
                       sport={"Cricket"}
                       rating="3.5"
                        coachName="Coach Priti Kaur"
                      /></span>
                    </Box>
                </Box>

                <Box style={{ marginTop:"30px", width:"320px", border: "1px solid #000000", backgroundColor:"white", borderRadius: "10px",margin:"auto" }}> 
                  <Box key={"Mahender playing Cricket"} style={{marginTop: "30px"}}>
                      <span style={{color:'black'}}><KhelVideo
                       src={"https://www.youtube.com/embed/Ctt-tZ_9KpY"}
                       title={"Dharamender playing Cricket"}
                       player={"Dharamender Singh"}
                       sport={"Cricket"}
                       rating="3.5"
                        coachName="Coach Priti Kaur"
                      /></span>
                    </Box>
                </Box>
            </Box>
            } 
    </div>
  )
}
