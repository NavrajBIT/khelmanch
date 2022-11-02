import React from "react";
import ratingStar from "../../Images/rating.svg";
import viewIcon from "../../Images/view.svg";
import { Typography, Box ,Button} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const KhelVideo = (props) => {
  const navigate = useNavigate();
  const ratingImageStyle = {
    height: "30px",
    width: "30px",
    margin: "0px",
    marginTop: "10px",
  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iframeStyle = matches ? {width: "270px",height: "150px",} : {width:"22vw",height:"30vh"}
  const mainBoxStyle = matches ? { margin: "0px 20px", display: "flex", flexDirection: "column", width: "280px"}:{ margin: "0px 20px", display: "flex", flexDirection: "column", width: "22vw"}
  const VideoTittleStyle = matches ? { fontFamily: 'Product Sans', fontStyle: "normal",fontWeight: "400", fontSize: "21.0538px", lineHeight: "27px"} : { fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600", fontSize: "1.5vw", lineHeight: "32px "}
  const PlayerNameStyle= matches ? { color: "#000000",textDecoration:"none",fontFamily: 'Inter', fontStyle: "normal",fontweight: "600", fontSize: "13px",lineHeight: "16px"}:{fontFamily: 'Inter', fontStyle: "normal",fontweight: "600", fontSize: "1vw",lineHeight: "23px", textDecoration:"none",color: "#000000"}
  const CoachNameStyle= matches ? {fontFamily: 'Product Sans', fontStyle:" normal", fontWeight: "400", fontSize: "11.1211px", lineHeight: "13px"}:{fontFamily: 'Product Sans',fontStyle: "normal", fontWeight:" 400", fontSize: "16px", lineHeight: "19px"}
  const SportName = matches ?{ height: "20px", width: "60px", fontSize: "10px", fontWeight: "700", color: "rgb(9, 9, 9)", fontFamily: "Poppins sans-serif", fontStyle: "normal", border: "1px solid rgb(9, 9, 9)", borderRadius: "5px",padding:"2px", textAlign: "center", marginBottom: "5px"}:{ height: "30px", width: "100px", fontSize: "15px", fontWeight: "700", color: "rgb(9, 9, 9)", fontFamily: "Poppins sans-serif", fontStyle: "normal", border: "1px solid rgb(9, 9, 9)", borderRadius: "5px", padding: "5px", textAlign: "center", marginTop: "1px", marginBottom: "10px"}
  const ViewTypoStyle = matches ?{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500", fontSize: "14.0926px", lineHeight: "17px"}:{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500", fontSize: "14.0926px", lineHeight: "17px"}
  return (
    <>
  <Box style={mainBoxStyle}>
      <Box>
        <iframe
          style={iframeStyle}
          src={props.src}
          title={props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>

     <Box style={{ display:"flex",flexWrap:"wrap" }} >
          <Typography sx={VideoTittleStyle}>{props.title}</Typography>
      </Box> 

      <Box style={{ display:"flex",marginTop:"30px",flexDirection:"row",justifyContent:"space-between"}}>
 
          <Box style={{ display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <Box>
            <a
            style={PlayerNameStyle}
              onClick={() => {
                navigate("/talent");
              }}
            >
              {props.player} 
            </a>
            </Box>
            <Box display="flex" flexDirection={"row"} mt={0.5}>
              <Stack spacing={1}>
                  <Rating name="half-rating-read" sx={{fontSize:"15px",color:"black"}} defaultValue={props.rating} precision={0.5} readOnly />
              </Stack>
            </Box>
          </Box>
          <Box>
            <Typography style={SportName}>{props.sport}</Typography>
          </Box>
      </Box>


      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:2}}>
        <Box>
          <Typography sx={CoachNameStyle}>{props.coachName}</Typography>
        </Box>
        <Box>
          <Typography sx={ViewTypoStyle}>30K Views</Typography>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default KhelVideo;
