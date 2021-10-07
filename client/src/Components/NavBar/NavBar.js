import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Input, Collapse, ListItemButton } from '@mui/material';
import {
  ListItem, List, ListItemText, Typography,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './NavBar.css';

const axios = require('axios');

function NavBar() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    axios.get('/api/v1/login')
      .then((res) => {
        if (res.data.message === 'already logged in!') {
          setIsLogin(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="navbar-container">
      <div className="nav-bar">
        <Link to="/">
          <Typography className="logo">Furniture</Typography>
        </Link>

        <div>
          <SearchIcon />
          <Input placeholder="Search Product" className="search" />
        </div>

        <div>
          <Cart />
        </div>
      </div>

      <div className="Nab-Bar">
        <div className="list">
          <List>
            <Link to="/">
              <ListItem button>
                <ListItemText primary="HOME" />
              </ListItem>
            </Link>
            <Link to="/">
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
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemText primary="PRODUCTS" />
              </ListItem>
            </Link>

            <Link to="/">
              <ListItem button>
                <ListItemText primary="PAGES" />
              </ListItem>
            </Link>

            <Link to="/">
              <ListItem button>
                <ListItemText primary="BLOG" />
              </ListItem>
            </Link>

            <Link to="/">
              <ListItem button>
                <ListItemText primary="ELEMENTS" />
              </ListItem>
            </Link>
          </List>

        </div>
        <div className="">

          {isLogin ? 'login' : (
            <List>
              <ListItem button>
                <Link to="/login"><ListItemText primary="Sign In" /></Link>
              </ListItem>

              <ListItem button>
                <Link to="/signup"><ListItemText primary="Register" /></Link>
              </ListItem>
            </List>
          )}

        </div>
      </div>
    </div>
  );
}
export default NavBar;
