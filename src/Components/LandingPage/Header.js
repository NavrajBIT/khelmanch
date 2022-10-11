import React from 'react';
import {AppBar, Toolbar,Box, Typography, Tabs,Tab} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/khelmanchlogo3.png";
import "./Header.css";
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';




export const Header = () => {
 
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
            className="kheLlogo"
            alt="KhelManch"
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
              <AccountCircleOutlinedIcon
                fontSize="large"
                sx={{ marginTop: "9px", marginLeft: "15px" }}
              />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

