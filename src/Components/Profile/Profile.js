import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button ,Tab,Tabs} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import { PlayerCard } from "./PlayerCard";
import { VideoCard } from "./VideoCard";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ProfileMBVVideoPlayer } from "./ProfileMBVVideoPlayer";
import { ProfileHeadingCom } from "./ProfileHeadingCom";



const Profile = () => {


  const [sortBy, setsortBy] = React.useState('');
  const [value, setValue] = React.useState();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const handleChange = (event) => {
    setsortBy(event.target.value);
  };
  const [isEditting, setIsEditting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();
  const profileUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";


  return (
    <>
         <ProfileHeadingCom
         ImgUrl={profileUrl}
         coachName={"Priti Kaur"}
         sport={"Cricket"}
         Videos={23}
        Followers={"30K"}
        Coachings={"20"}
        bio={"Priti is a highly experienced and successful senior leader having led and managed teams across the India. Priti has always had a passion for helping people to be the best they can and prides herself on changing the lives of many individuals. Priti has a natural professionalism and warmth that enables her to connect naturally with people. Her enthusiasm and positivity are infectious. Priti's approach to coaching is to authentically support each individual's growth through thought-provoking questions, great listening and empathy."}
        coach={true}
        />

        {matches &&<><ProfileMBVVideoPlayer />
        </>}
        
        {!matches && <> <Box width={1700} marginLeft={13} marginTop={10} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} borderBottom={"3px solid #FE8D32"} paddingBottom={2} >
        <Typography fontFamily={"inherit"} fontStyle="normal" fontWeight="600" fontSize="35px" lineHeight={"42px"} >
        Players added by you</Typography>
        <Button LinkComponent={Link} to="/addplayer" variant="contained" sx={{ width: "150px", height: "50px", background: "#ED842E", color: "white", fontStyle: "normal", marginLeft: "15px", latterSpacing: "0.5rem", }} >
          + Add players
          </Button>
        </Box>
        <Box sx={{ width: "1700px", height: "100%", margin: "auto", positions: "absolute", padding: "20px", }} >

         <PlayerCard />


        </Box>

        <Box width={1700} marginLeft={13} marginTop={10} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} borderBottom={"3px solid #FE8D32"} paddingBottom={2} >
        <Typography fontFamily={"inherit"} fontStyle="normal" fontWeight="600" fontSize="35px" lineHeight={"42px"} >
        Videos added by you</Typography>
        <Button LinkComponent={Link} to="/addvideo" variant="contained" sx={{ width: "150px", height: "50px", background: "#ED842E", color: "white", fontStyle: "normal", marginLeft: "15px", latterSpacing: "0.5rem", }} >
          + Add Video
          </Button>
        </Box>


        <Box width={1700} marginLeft={13} marginTop={10} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} borderBottom={"1px solid black"} paddingBottom={2} >
        <Typography fontFamily={"inherit"} fontStyle="normal" fontWeight="600" fontSize="35px" lineHeight={"42px"} >
              <Tabs value={value} onChange={(e, val) => setValue(val)}>
              <Tab LinkComponent={Link} to="/" style = {{ color:" #000000", fontFamaily: "Inter", fontStyle: "normal", fontWeight: "300", fontSize: "15px", }}label="Videos" />
              
              <Tab LinkComponent={Link} to="/" style = {{ color:" #000000", fontFamaily: "Inter", fontStyle: "normal", fontWeight: "300", fontSize: "15px", }}label="Playlist" />
              </Tabs>
        </Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sortBy} label="Sort by" onChange={handleChange} >
                <MenuItem value={"Recent"}>Recent</MenuItem>
                <MenuItem value={"Newer"}>Newer</MenuItem>
                <MenuItem value={"Long"}>Long</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ width: "1700px", height: "548px", margin: "auto", positions: "absolute", padding: "10px", marginBottom: "700px", }} >
          <VideoCard />
        </Box>
        <Button LinkComponent={Link} to="/explore" variant="outlined" sx={{ background: "white", color: "black", fontWeight: "bold", fontFamily: "Product Sans", fontStyle: "normal", alignItems: "center", marginLeft: "850px", height: "50px", width: "250px", borderRadius: "10px", border: "2px solid black", marginTop: "55px", }} >
          Load more
        </Button> </>}
    </>
  );
};

export default Profile;
