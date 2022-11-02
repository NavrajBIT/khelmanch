import React from 'react';
import {Box, Typography } from '@mui/material';
import imageunsplash from "../../../Images/unsplash1.png";
import { VideoCardHome } from './VideoCardHome';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { VideoCard } from '../../Profile/VideoCard';

export const Container6th = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const mainBoxStyle = matches ? { width: "359px", height: "300px", margin: "auto", marginTop: 10, positions: "static", mt: 10, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, padding: "20px", backgroundImage: `url(${imageunsplash})`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 0, }:{ width: "90vw", height: "544px", margin: "auto", marginTop: 10, positions: "static", mt: 10, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, padding: "20px", backgroundImage: `url(${imageunsplash})`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 0, }

  return (
    <div>
        {!matches &&<Box sx={mainBoxStyle} >
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={35} >
            <VideoCardHome />
            <VideoCardHome />
          </Box>
        </Box>}

        {matches &&
          <Box>
            <Box position={"relative"} sx={{width:"359px",height:"300px",mt:12}}>
            <img alt="KhelManch" src={imageunsplash} style={{ width: "100%", height: "100%", }} />
            </Box>
            <Box position={"absolute"} mt={-65}>
            <Typography style={{  marginLeft: "88px",color: "#FE8D32", fontFamily: "Times New Romen", fontStyle: "normal", fontWeight: "700", fontSize: "34px", }} margin="auto" mt={30} >
            View and Rate <br></br>
            <span style={{ color: "white", marginLeft: "36px" }}>
              the videos
            </span>
            </Typography>
            </Box>
            <Box position={"relative"} mt={-15}>
            <VideoCardHome />
            </Box>
          </Box>
          }

    </div>
  )
}
