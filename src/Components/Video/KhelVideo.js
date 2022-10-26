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
  const iframeStyle = matches ? {width: "270px",height: "150px",} : {width:"420px",height:"236px"}
  const mainBoxStyle = matches ? { margin: "0px 20px", display: "flex", flexDirection: "column", width: "280px"}:{ margin: "0px 20px", display: "flex", flexDirection: "column", width: "420px"}
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

     <Box style={{ display:" grid", gridTemplateColumns: "2fr 1fr", alignItems: "center" }} >
          {!matches && <h3>{props.title}</h3> }
          {matches && <h4>{props.title}</h4> }
        <Box style={{ display: "flex", alignItems: "center", justifyContent: "right",}}>
          30K
          <img style={{ height: "20px", width: "20px", margin: "0px 0px 0px 10px", padding: "0px", justifyContent: "center", }} src={viewIcon} alt="" />
        </Box>
      </Box>  

      <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <Box >
          <Box>
            <a
            style={{ color: "black", textDecoration:"none", fontSize: "20px", fontWeight: "700",}}
              onClick={() => {
                navigate("/talent");
              }}
            >
              {props.player} 
            </a>
          </Box>
          <Typography style={{ height: "30px", width: "100px", fontSize: "15px", fontWeight: "700", color: "rgb(9, 9, 9)", fontFamily: "Poppins sans-serif", fontStyle: "normal", border: "1px solid rgb(9, 9, 9)", borderRadius: "5px", padding: "5px", textAlign: "center", marginTop: "5px", marginBottom: "10px"}}>{props.sport}</Typography>
        </Box>

        <Box mt="30px" marginLeft={"20px"} style={{textAlign:"right"}}>
          <Box display="flex" flexDirection={"row"}>
            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
          </Stack>
            {! matches && <Typography mt='3px' marginLeft={"20px"}>{props.rating}/5</Typography>}
        </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default KhelVideo;
