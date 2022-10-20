import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import playerData from "../../Data/PlayerData";


export const PlayerCard = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Box style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {playerData.map((player) => {
            return (
              <Box key={player.name} style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: 'center', margin: "20px"}}>
                <Box style={{'&:hover':{ animation: "scaleup 0.3s", transform: "scale(1.1)"},cursor:"pointer", width: "200px", height: "200px"}} onClick={() => { navigate("/talent"); }}>
                  <img style={{ width: "100%", height: "100%",borderRadius:"10px"}} src={player.image} alt={player.name} />
                </Box>
                <h3 style={{color:"#ED842E"}}>{player.name}</h3>
                <h4>{player.sport}</h4>
              </Box>
            );
           })}
          </Box>
    </div>
  )
}
