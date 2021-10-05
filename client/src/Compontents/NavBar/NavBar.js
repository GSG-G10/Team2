import React from "react";
import "./NavBar.css";
import { Typography } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import Cart from "../Cart/Cart";

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import ListItemButton from '@mui/material/ListItemButton';


import Collapse from '@mui/material/Collapse';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NavBar() {
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
      <div>
    <div className="nav-bar">
      <div>
        <SearchIcon />
        <Input placeholder="Search Product" className="search" />
      </div>

      <div>
        <Typography className="logo">Furniture</Typography>
      </div>
      <div>
        <Cart />
      </div>
    </div>

    <div className="Nab-Bar">
        <div className="list">
       
    
   
      <List>
         <a href="/">
          <ListItem button>
          <ListItemText primary="HOME" />
         </ListItem>
         </a>
        
         <ListItemButton onClick={handleClick}>
        
        <ListItemText primary="SHOP" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          <ListItem button>
          <ListItemText primary="Lights" />
         </ListItem>
         <ListItem button>
          <ListItemText primary="Humans" />
         </ListItem>
           
          </ListItemButton>
        </List>
      </Collapse> 
       
         <a href="/">
          <ListItem button>
          <ListItemText primary="PRODUCTS" />
         </ListItem>
         </a>
       
         <a href="/">
          <ListItem button>
          <ListItemText primary="PAGES" />
         </ListItem>
         </a>
      
         <a href="/">
          <ListItem button>
          <ListItemText primary="BLOG" />
         </ListItem>
         </a>
       
         <a href="/">
          <ListItem button>
          <ListItemText primary="ELEMENTS" />
         </ListItem>
         </a>
         </List>
         {/* </a>
         </List>
           
          <ListItem  href="/">
         <ListItemText primary="SHOP" />
          </ListItem>
          <ListItem  href="/">
         <ListItemText primary="PRODUCTS" />
          </ListItem>
          <ListItem  href="/">
         <ListItemText primary="PAGES" />
          </ListItem>
          <ListItem  href="/">
         <ListItemText primary="BLOG" />
          </ListItem>
          <ListItem  href="/">
         <ListItemText primary="ELEMENTS" />
          </ListItem>
          */}
         
        </div>
        <div className="list">
        <List>
         <a href="/">
          <ListItem button>
          <ListItemText primary="Sign In" />
         </ListItem>
         </a>
        
         <a href="/">
          <ListItem button>
          <ListItemText primary="Register" />
         </ListItem>
         </a>
         </List>
            {/* <List>
        <ListItem  href="/">
         <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem  href="/">
         <ListItemText primary="Register" />
          </ListItem>
          </List> */}
        </div>
    </div>
    </div>
  );
}
export default NavBar;
