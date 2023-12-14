import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  color: 'black',
  textDecoration: 'none',
}));

const StyledIconButton = styled(IconButton)({
  color: 'black',
  '&:hover': { backgroundColor: 'transparent', opacity: 1 }
});

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#EEEEEE', elevation: 0, borderBottom: 'none' }}>
      <Toolbar sx={{ padding: '0px', margin: '0px' }}>
        <StyledTypography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </StyledTypography>
        <div>
          <Button color="inherit" href="#about" sx={{ color: 'black', marginRight: 2, textDecoration: 'none', textTransform: 'none', '&:hover': { backgroundColor: 'transparent', opacity: 1 }}}>About</Button>
          <Button color="inherit" href="#experience" sx={{ color: 'black', marginRight: 2, textDecoration: 'none', textTransform: 'none', '&:hover': { backgroundColor: 'transparent', opacity: 1 }}}>Experience</Button>
          <Button color="inherit" href="#projects" sx={{ color: 'black', textDecoration: 'none', textTransform: 'none', '&:hover': { backgroundColor: 'transparent', opacity: 1 }}}>Projects</Button>
          <StyledIconButton href="https://twitter.com/jaretterer" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </StyledIconButton>
          <StyledIconButton href="https://linkedin.com/jackretterer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledIconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
