import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Input, Collapse, ListItemButton } from '@mui/material';
import {
  ListItem, List, ListItemText, Typography,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import Cart from '../Cart/Cart';
import './NavBar.css';

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

        </div>
        <div className="">
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

        </div>
      </div>
    </div>
  );
}
export default NavBar;