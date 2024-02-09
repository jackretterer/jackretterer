import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, List, ListItemText, ListItem, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <List>
        {['About', 'Experience', 'Projects'].map((text) => (
          <ListItem button key={text} component="a" href={`#${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <StyledIconButton href="https://twitter.com/jaretterer" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </StyledIconButton>
      <StyledIconButton href="https://www.linkedin.com/in/jackretterer/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </StyledIconButton>
      <StyledIconButton href="https://github.com/jackretterer" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
      </StyledIconButton>
    </>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#EEEEEE', elevation: 0, borderBottom: 'none' }}>
      <Toolbar sx={{ padding: '0 16px', margin: '0px', display: 'flex', alignItems: 'center' }}>
      <StyledTypography 
        variant="h6" 
        component={Link} 
        to="/" 
        sx={{ 
          textDecoration: 'none', 
          display: 'flex', // Make the container a flex container
          alignItems: 'center' // Align children vertically
        }}>
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
          <Typography sx={{paddingLeft: "3px", fontWeight: 'bold'}}> Jack Retterer</Typography>
        </StyledTypography>
        { isMobile ? 
        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
        : null }
        { isMobile ? null :
        <div sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button color="inherit" href="#about" sx={{ color: 'black', fontWeight: 'bold', textDecoration: 'none', textTransform: 'none' }}>About</Button>
          <Button color="inherit" href="#experience" sx={{ color: 'black', fontWeight: 'bold', textDecoration: 'none', textTransform: 'none' }}>Experience</Button>
          <Button color="inherit" href="#projects" sx={{ color: 'black', fontWeight: 'bold', textDecoration: 'none', textTransform: 'none' }}>Projects</Button>
          <StyledIconButton href="https://twitter.com/jaretterer" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </StyledIconButton>
          <StyledIconButton href="https://www.linkedin.com/in/jackretterer/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledIconButton>
          <StyledIconButton href="https://github.com/jackretterer" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </StyledIconButton>
        </div>
        }
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true, marginRight: '5%' }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
