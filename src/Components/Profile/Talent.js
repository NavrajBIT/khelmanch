import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { Button ,Link,Tab,Tabs} from "@mui/material";
import { VideoCard } from "./VideoCard";

export const Talent = () => {
  const [isEditting, setIsEditting] = useState(false);
  const navigate = useNavigate();

  
  const profileUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFAN7UKvo70IZwE_E99S4EiidVvU9BufSbQ&usqp=CAU";


  return (
    <>
            <Box sx={{ width: "100%", height: "548px", margin: "auto", marginTop: 200, positions: "absolute", mt: 10, padding: "20px", background: "#262626", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
          <Box>
          <img alt="Coach Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFAN7UKvo70IZwE_E99S4EiidVvU9BufSbQ&usqp=CAU" style={{ width: "540px", height: "478px", marginLeft: "20px", marginTop: "20px", borderRadius: "10px", }} />
          </Box>

          <Box marginLeft={10} display="flex" flexDirection="column" >
            <Box marginTop={5} display="flex" flexDirection="row" >
              <Typography fontFamily={"Inter"} fontWeight="700" fontSize="50px" ><span style={{color:"#FE8D32"}}>Mahender Singh</span></Typography>
              <Box width={100} height={30} marginLeft={5} marginTop={3} textAlign="justify" border="2px solid #FFFFFF" borderRadius="10px" padding="0px" paddingBottom={4} alignItems={"center"} >
                  <Typography color="#FFFFFF" marginBottom={2} marginLeft={1.5} fontFamily={"Inter"} fontWeight="600" fontSize="20px" >Hockey</Typography>
              </Box>
              <Box marginTop={2.3} marginLeft={70} >
                <IconButton>
                  <EditIcon sx={{ color: "rgba(255, 255, 255, 0.7)",border: "1px solid rgba(255, 255, 255, 0.7)",borderRadius: "100px",padding: "5px",}} fontSize="large" />
                </IconButton>
                <IconButton>
                  <MoreVertIcon fontSize="large" sx={{ color: "rgba(255, 255, 255, 0.7)",border: "1px solid rgba(255, 255, 255, 0.7)",borderRadius: "100px",padding: "5px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box marginTop={5} display={"flex"} flexDirection={"row"} >
              <Typography fontFamily={"Inter"} fontWeight="500" fontSize="18px" lineHeight={"30.26px"} color={"white"} >
                <span style={{color:"rgba(255, 255, 255, 0.80)"}}>Gender : </span>Male <br />
                <span style={{color:"rgba(255, 255, 255, 0.80)"}}>Father’s Name :</span> Jitender Singh <br />
                <span style={{color:"rgba(255, 255, 255, 0.80)"}}>Mother's Name :</span> Suneeta Kaur <br />
                <span style={{color:"rgba(255, 255, 255, 0.80)"}}>Added by :</span> Coach Priti Kaur
              </Typography>

            </Box>

            <Box>
              <Typography fontFamily={"Inter"} fontWeight="400" fontSize="21.2px" lineHeight={"30.26px"} color={"rgba(255, 255, 255, 0.8)"} marginTop={5} style={{textAlign:"justify"}} >
              The difference between the old ballplayer and the new ballplayer
              is the jersey. The old ballplayer cared about the name on the
              front. The new ballplayer cares about the name on the back."
              sports caption for Instagram Witness the Power. The harder you
              work, the harder it is to surrender. "One day of practice is like
              one day of clean living. It doesn't do you any good." What makes
              something special is not just what you have to gain, but what you
              feel there is to lose. A champion is afraid of losing. Everyone
              else is afraid of winning. A snooker game mixes ritual with
              geometry
              </Typography>
            </Box>

            
          </Box>

        </Box>
        
        <Box width={1700} marginLeft={13} marginTop={10} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} paddingBottom={2} >
              
          <Box width={600} marginLeft={70} marginTop={10} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} borderBottom={"3px solid #FE8D32"} paddingBottom={2} >
          <Typography fontFamily={"Inter"} marginLeft={12} fontStyle="normal" fontWeight="600" fontSize="35px" lineHeight={"42px"} >
          Mahender Singh’s Playlist
          </Typography>
          </Box>
        </Box>


        <Box sx={{ width: "1700px", height: "548px", margin: "auto", positions: "absolute", padding: "10px", marginBottom: "700px", }} >
  
            <VideoCard />
      

        </Box>
        <Button LinkComponent={Link} to="/explore" variant="outlined" sx={{ marginTop: "20px", background: "white", color: "black", fontWeight: "bold", fontFamily: "Product Sans", fontStyle: "normal", alignItems: "center", marginLeft: "850px", height: "50px", width: "250px", borderRadius: "10px", border: "2px solid black", marginTop: "55px", }} >
          Load more
        </Button>

      
    </>
  );
};

export default Talent;
