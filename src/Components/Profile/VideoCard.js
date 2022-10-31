import React, { useContext, useState } from "react";
import KhelVideo from "../Video/KhelVideo";
import Box from "@mui/material/Box";
import videosData from "../../Data/VidesData";


export const VideoCard = () => {
  return (
    <div>
        <Box style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
              {videosData.map((video) => {
                return (
                  <Box style={{ border: "1px solid #000000", borderRadius: "10px", margin: "10px", }}> 
                    <Box key={video.title} style={{marginTop: "30px"}}>
                      <span style={{color:'black'}}><KhelVideo
                        src={video.src}
                        title={video.title}
                        player={video.name}
                        sport={video.sport}
                        coachName="Coach Priti Kaur"
                        rating="3.5"
                      /></span>
                    </Box>
                  </Box>
                );
              })}
            </Box>
    </div>
  )
}
