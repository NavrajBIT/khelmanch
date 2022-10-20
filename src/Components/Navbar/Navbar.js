import React from 'react';
import {AppBar, Toolbar,Box, Typography, Tabs,Tab} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/khelmanchlogo3.png";
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';




export const Navbar = () => {
 
  const navigate = useNavigate();

  const [value, setValue] = useState();

    const tabsStyle = {
        color:" #000000",
        fontFamaily: "Inter",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "22px",
    }

  return (
    <Box sx={{ flexGrow: 1, width: "auto", margin: "50px" }}>
      <AppBar
        position="sticky"
        sx={{ background: "#fff", color: "#000", boxShadow: "none" }}
      >
        <Toolbar>
          <img
            alt="KhelManch"
            height={"94px"}
            width={"233px"}
            onClick={() => {
              navigate("/");
            }}
            src={logo}
          />

          <Box
            display="flex"
            marginLeft={"auto"}
            marginBottom="auto"
            marginTop={6}
            marginRight={"40px"}
          >
            <Tabs value={value} onChange={(e, val) => setValue(val)}>
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
              LinkComponent={Link}
                to="/profile"
              >
              <AccountCircleOutlinedIcon

                fontSize="large"
                sx={{ marginTop: "9px", marginLeft: "15px" }}
              />
              </IconButton>
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

