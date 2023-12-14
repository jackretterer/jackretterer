import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    color: 'black',
    textDecoration: 'none',
  },
  navLinks: {
    '& .MuiButton-root': {
      color: 'black',
      marginRight: theme.spacing(2),
      textDecoration: 'none',
      textTransform: 'none', // This prevents the text from being automatically capitalized
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#EEEEEE' }} elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.logo} component={Link} to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ height: '40px' }} /> {/* Adjust height as needed */}
        </Typography>
        <div className={classes.navLinks}>
          <Button color="inherit" href="#about" sx={{'&:hover': { backgroundColor: 'transparent', opacity: 1}}}>About</Button>
          <Button color="inherit" href="#experience" sx={{'&:hover': { backgroundColor: 'transparent', opacity: 1}}}>Experience</Button>
          <Button color="inherit" href="#projects" sx={{'&:hover': { backgroundColor: 'transparent', opacity: 1}}}>Projects</Button>
          <IconButton color="inherit" href="https://twitter.com/jaretterer" target="_blank" sx={{'&:hover': { backgroundColor: 'transparent', opacity: 1}}}>
            <FontAwesomeIcon icon={faTwitter} style={{ color: 'black' }} />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com/jackretterer" target="_blank" sx={{'&:hover': { backgroundColor: 'transparent', opacity: 1}}}>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }}/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
