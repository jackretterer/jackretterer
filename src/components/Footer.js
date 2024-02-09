import * as React from 'react';
import { Box, Button, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 3%', // Increased padding from the sides
      backgroundColor: '#EEEEEE',
      position: 'static',
      bottom: 0,
      left: 0,
      right: 0,
    }}
  >
    <Typography variant="body2" color="textSecondary">
      &copy; {new Date().getFullYear()} Jack Retterer
  </Typography>
    <Box>
      <IconButton color="inherit" href="https://twitter.com/jaretterer" target="_blank" sx={{ '&:hover': { backgroundColor: 'transparent', opacity: 1 } }}>
        <FontAwesomeIcon icon={faTwitter} style={{ color: 'black' }} />
      </IconButton>
      <IconButton color="inherit" href="https://www.linkedin.com/in/jackretterer/" target="_blank" sx={{ '&:hover': { backgroundColor: 'transparent', opacity: 1 } }}>
        <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
      </IconButton>
      <IconButton href="https://github.com/jackretterer" target="_blank">
        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }}/>
      </IconButton>
    </Box>
  </Box>
  );
};

export default Footer;
