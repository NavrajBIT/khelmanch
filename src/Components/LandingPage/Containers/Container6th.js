import React from 'react';
import {Box, Typography } from '@mui/material';
import imageunsplash from "../../../Images/unsplash1.png";
import { VideoCardHome } from './VideoCardHome';

export const Container6th = () => {

  return (
    <div>
        <Box sx={{ width: "1646px", height: "544px", margin: "auto", marginTop: 10, positions: "static", mt: 10, boxShadow: "5px 5px 10px #ccc", ":hover:": { boxShadow: "20px 20px 40px #ccc" }, padding: "20px", backgroundImage: `url(${imageunsplash})`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 0, }} >
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={35} >
            <VideoCardHome />
            <VideoCardHome />
          </Box>
        </Box>
    </div>
  )
}
