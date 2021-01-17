import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import styles from './Sidebar.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Sidebar2() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <div className={styles.logo}><img style={{width: "100%"}} src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /></div>
          </Typography>
          <Grid xs/>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                    <Link href="/about"><a>About</a></Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/jobs"><a>Jobs</a></Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/contact"><a>Contact</a></Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/colophon"><a>Colophon</a></Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
