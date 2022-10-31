import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { Button ,Tab,Tabs} from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import KhelVideo from '../Video/KhelVideo';
import videosData from '../../Data/VidesData';
import { PlayerCard } from './PlayerCard';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export const ProfileMBVVideoPlayer = () => {
    const [value1, setValue1] = React.useState(0);

    const handleChange2 = (event, newValue) => {
      setValue1(newValue);
    };
  return (
    <div>
        <Box sx={{margin: "auto",width:"360px", display:"flex" ,flexDirection:"row" , justifyContent:"space-between",padding:"10px"}}> 
          <Button component="div" LinkComponent={Link} to="/addvideo" variant="contained" sx={{ width: "150px", height: "50px", background: "#ED842E", color: "white", fontStyle: "normal", latterSpacing: "0.5rem", }} >
            Add Player
          </Button>
          <Button component="div" LinkComponent={Link} to="/addvideo" variant="contained" sx={{ width: "150px", height: "50px", background: "#ED842E", color: "white", fontStyle: "normal", latterSpacing: "0.5rem", }} >
            Add Video
          </Button>
        </Box>
        <Box sx={{margin:"auto",width:"360px",borderBottom:"1px solid rgba(0, 0, 0, 1)",mt:5}}>
            <Tabs value={value1} onChange={handleChange2} aria-label="icon tabs example">
                <Tab style={{margin:"auto"}} icon={<AccountCircleOutlinedIcon sx={{ fontSize: 60 }} />} aria-label="Player" />
                <Tab style={{margin:"auto"}} icon={<YouTubeIcon sx={{ fontSize: 70 }} />} aria-label="favorite" />
            </Tabs>
        </Box>
        <Box sx={{margin:"auto",width:"360px"}}>
            <TabPanel value={value1} index={0}>
                <Box sx={{width:"320px",margin:"auto"}}> 
                    <PlayerCard/>
               </Box>
            </TabPanel>
            <TabPanel value={value1} index={1}>
            {videosData.map((video) => {
                return (
                <Box style={{ marginTop:"5px", width:"320px", border: "1px solid #000000", backgroundColor:"white", borderRadius: "10px", }}> 
                <Box key={video.title} style={{marginTop: "30px"}}>
                      <span style={{color:'black'}}><KhelVideo
                        src={video.src}
                        title={video.title}
                        player={video.name}
                        sport={video.sport}
                        rating="3.5"
                        coachName="Coach Priti Kaur"
                      /></span>
                    </Box>
                </Box>
                 );
                })}
            </TabPanel>
        </Box>
    </div>
  )
}
