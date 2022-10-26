import React from 'react';
import { useState } from 'react';
import { Drawer,IconButton,List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerComp = () => {
  const PAGES=["HOME","EXPLORE","WALLET","CONTACT","PROFILE"];
  const [openDrawer, setopenDrawer] = useState(false)
  return (
    <React.Fragment>
    <Drawer anchor='right' open={openDrawer} 
    onClose={()=>setopenDrawer(false)}
    >
      {
        PAGES.map((page,index)=>(
          <List key={index}>
          <ListItemButton>
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
