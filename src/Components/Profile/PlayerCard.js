import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import playerData from "../../Data/PlayerData";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";

export const PlayerCard = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const mainBoxStyle = matches ?{ display: "flex", flexWrap: "wrap"}:{ display: "flex", flexWrap: "wrap", justifyContent: "center"}
  const playerNameStyle = matches ?{fontFamily: "Inter", fontStyle: "normal", fontWeight: "700", fontSize: "12px", lineHeight: "15px", color: "#ED842E",} : {fontFamily: "Inter", fontStyle: "normal", fontWeight: "700", fontSize: "22px", lineHeight: "30px", color: "#ED842E",}
  const playersport = matches ?{fontFamily: "Inter", fontStyle: "normal", fontWeight: "500", fontSize: "9px", lineHeight: "11px", color: "#000000",} : {fontFamily: "Inter", fontStyle: "normal", fontWeight: "500", fontSize: "18px", lineHeight: "24px", color: "#000000",}
  const ChildBoxStyle= matches ? { width: "119px", display: "flex", flexDirection: "column", alignItems: 'center', margin: "20px"}:{ width: "200px", display: "flex", flexDirection: "column", alignItems: 'center', margin: "20px"}
  const ImageBoxStyle = matches ?{'&:hover':{ animation: "scaleup 0.3s", transform: "scale(1.1)"},cursor:"pointer", width: "119px", height: "119px"}:{'&:hover':{ animation: "scaleup 0.3s", transform: "scale(1.1)"},cursor:"pointer", width: "200px", height: "200px"}
  const navigate = useNavigate();
  return (
    <div>
        <Box style={mainBoxStyle}>
          {playerData.map((player) => {
            return (
              <Box key={player.name} style={ChildBoxStyle}>
                <Box style={ImageBoxStyle} onClick={() => { navigate("/talent"); }}>
                  <img style={{ width: "100%", height: "100%",borderRadius:"10px"}} src={player.image} alt={player.name} />
                </Box>
                <Typography sx={playerNameStyle}>{player.name}</Typography>
                <Typography sx={playersport}>{player.name}</Typography>
              </Box>
            );
           })}
          </Box>
    </div>
  )
}
