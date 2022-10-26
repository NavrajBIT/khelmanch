import React from 'react';
import {AppBar, Toolbar,Box, Typography, Tabs,Tab} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/khelmanchlogo3.png";
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { DrawerComp } from './DrawerComp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




export const Navbar = () => {
 
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  const [ProfileIconColor, setProfileIconColor] = useState("black");

    const tabsStyle = {
        color:" #000000",
        fontFamaily: "Inter",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "22px",
    }

    const logoStyle = matches ? {width: "111px", height: "45px",} : {width: "233px", height: "94px"}

    const handleClickProfileIcon = () => {
      navigate('/profile');
      setValue(null);
      setProfileIconColor("#ED842E");
    };

    const handleChangeforTabs = (event, newValue) => {
      setValue(newValue);
      setProfileIconColor("black");
    };

  return (
    <Box sx={{ flexGrow: 1, width: "auto" }}>
      <AppBar
        position="sticky"
        sx={{ background: "#fff", color: "#000", boxShadow: "none" }}
      >
        <Toolbar>
          <img
            alt="KhelManch"
            style={logoStyle}
            onClick={() => {
              navigate("/");
            }}
            src={logo}
          />
          {
            matches ? (<><DrawerComp/></>):(
            <>
              <Box
            display="flex"
            marginLeft={"auto"}
            marginBottom="auto"
            marginTop={6}
            marginRight={"40px"}
          >
            <Tabs value={value} onChange={handleChangeforTabs}>
              <Tab LinkComponent={Link} to="/" style={tabsStyle} label="Home" />
              <Tab
                LinkComponent={Link}
                to="/explore"
                style={tabsStyle}
                label="EXPLORE"
              />
              <Tab style={tabsStyle} label="WALLET" />
              <Tab style={tabsStyle} label="CONTACT" />
              <IconButton
              onClick={handleClickProfileIcon}
              sx={{ color: ProfileIconColor }}
              >
              <AccountCircleOutlinedIcon

                fontSize="large"
                sx={{ marginTop: "9px", marginLeft: "15px" }}
              />
              </IconButton>
            </Tabs>
          </Box>
            </>)
          }

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

