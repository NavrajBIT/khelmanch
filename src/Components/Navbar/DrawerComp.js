import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer,IconButton,List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export const DrawerComp = () => {
  const PAGES=["HOME","EXPLORE","WALLET","CONTACT","PROFILE"];
  const [openDrawer, setopenDrawer] = useState(false)
  const navigate = useNavigate();

  const handleClick = (page) => {
    page === "HOME" && navigate("/");
    page === "EXPLORE" && navigate("/explore");
    page === "WALLET" && navigate("/wallet");
    page === "CONTACT" && navigate("/contact");
    page === "PROFILE" && navigate("/profile");
    setopenDrawer(false);
  }
  return (
    <React.Fragment>
    <Drawer  anchor='right' open={openDrawer} 
    onClose={()=>setopenDrawer(false)}
    >
        <List >
          <ListItemButton onClick={() => setopenDrawer(false)}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
          </ListItemButton>
        </List>
      {
        PAGES.map((page,index)=>(
          <List key={index}>
          <ListItemButton onClick={() => handleClick(page)}>
            <ListItemIcon>
              <ListItemText> {page}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
        ))
      }
    </Drawer>
    <IconButton sx={{marginLeft:"auto"}} onClick={()=>setopenDrawer(!openDrawer)}>
      <MenuIcon fontSize="large"/>
    </IconButton>

    </React.Fragment>
  )
}
