import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, ListItem, List, Link, IconButton, Grid, Chip, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import pfp from "../assets/pfp.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';

const ProjectContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  padding: theme.spacing(6, 10),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
  },
}));

const ProjectTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '1rem',
});

const ProjectLink = styled(Link)({
  color: '#0077b5',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const projects = [
  {
    name: 'Advocate AI - Legal Analysis Tool Kit',
    url: 'https://www.advocateai.xyz/',
    techStack: [
      { label: 'React', icon: <ComputerIcon /> },
      { label: 'Django', icon: <StorageIcon /> },
      { label: 'LLMs', icon: <PsychologyIcon /> },
    ],
  },
  {
    name: 'Pen2Pixel - In Development',
    url: 'https://www.linkedin.com/company/divitas-networks/',
    techStack: [
      { label: 'React', icon: <ComputerIcon /> },
      { label: 'Spring Boot', icon: <StorageIcon /> },
      { label: 'Computer Vision/OCR', icon: <PsychologyIcon /> },
    ],
  },
];

const LandingPage = () => {

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

  const aboutStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    minHeight: '100vh'
  };

  const sectionStyle = {
    width: isMobile ? '100%' : '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const theme = useTheme();

  return (
    <div>
      {/* Full-height section with background */}
      <Box
        style={{
          minHeight: '100vh',
          background: '#EEEEEE',
          display: 'flex',
          justifyContent: 'center', // Center the Container horizontally
        }}
      >
        <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Text and content inside the Container */}
          <Box style={{ marginLeft: '5%', width: '100%', marginTop: isMobile ? '-35%' : '-10%' }}>
            {
              isMobile ?
                <Typography variant="h1" style={{ fontWeight: 'bold', fontSize: '15vw' }}>
                  currently building
                </Typography>
                :
                <Typography variant="h1" style={{ fontWeight: 'bold'}}>
                  currently building
                </Typography>
            }
            {
              isMobile ?
                <Typography variant="h1" style={{ fontWeight: 'bold', fontSize: '15vw' }}>
                  cool things.
                </Typography>
                :
                <Typography variant="h1" style={{ fontWeight: 'bold'}}>
                  cool things.
                </Typography>
            }
          </Box>

          {/* Scroll Down Indicator */}
          <Typography
            style={{
              position: 'absolute',
              bottom: '1%',
              right: '2%',
              writingMode: 'vertical-rl',
              transform: 'rotate(0deg)',
              cursor: 'pointer',
            }}
            color="textSecondary"
            variant="body1"
            onClick={() => window.scrollTo(0, window.innerHeight)}
          >
            scroll down --->
          </Typography>
        </Container>
      </Box>

      <Box id="about" style={aboutStyle}>
        <Box style={sectionStyle}>
          <Box style={{ width: '85%' }}>
            <Typography variant="h3" style={{ marginTop: '35px', marginBottom: '20px' }}>
              About Me
          </Typography>
            <Typography variant="body1" paragraph>
              I am building products that help the world. That's pretty much it. I am a firm believer that technology has the potential to benefit the world. And when you build a good enough product its almost like a gift to the user.
          </Typography>
            <Typography variant="body1" paragraph>
              My biggest interests are in crypto, AI, finance and space. I've worked in some capacity in all of them, but have spent most of my time in AI.
          </Typography>
            <Typography variant="body1" paragraph style={{ marginBottom: '50px' }}>
              I am "jack" of all trades. I am capable of writing code but I view myself more as a builder. I know frontend, machine learning, data analysis and a little bit of backend.
              Outside of working and building projects I like skiing, running, investing, art, lifting, baking and being outside.
          </Typography>
          </Box>
        </Box>

        <Box style={sectionStyle}>
          {/* Image Content Here */}
          <img src={pfp} alt="Profile" style={{ width: '75%', height: 'auto', marginBottom: '5%' }} />
        </Box>

      </Box>


      {/* Experience Section */}
      <Box id="experience"
        style={{
          minHeight: '10vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: "#EEEEEE",
          padding: isMobile ? '10% 5%' : '10% 20%', // Adjust padding based on screen size
        }}
      >
        {/* Container for header and timeline */}
        <Box style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%', alignItems: isMobile ? 'center' : 'flex-start' }}>
          {/* Header */}
          <Box style={{ width: 'auto', marginRight: isMobile ? '0' : '20px', textAlign: isMobile ? 'center' : 'left', marginBottom: isMobile ? '20px' : '0' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Experience</Typography>
            <Typography variant="subtitle1">Professional + Internships</Typography>
          </Box>

          {/* Timeline */}
          <Box style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Timeline Line */}
            <Box style={{ flexGrow: 1, position: 'relative' }}>
              {isMobile ? <Box style={{ position: 'absolute', left: '20px', borderLeft: '2px solid black', height: '100%' }} /> : null}
              {!isMobile && <Box style={{ position: 'absolute', left: '0', borderLeft: '2px solid black', height: '100%' }} />}
              {/* Points on the timeline */}
              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{fontSize: isMobile ? '3vw' : null }}>Unstructured, San Francisco, CA</Typography>
                <Typography variant="subtitle1" style={{fontSize: isMobile ? '3vw' : null }}>Developer Advocate Engineer (Jul 2023 - Dec 2023)</Typography>
              </Box>
              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{fontSize: isMobile ? '3vw' : null }}>Gemini / Nifty Gateway, San Francisco, CA</Typography>
                <Typography variant="subtitle1" style={{fontSize: isMobile ? '3vw' : null }}>Business Development (Jan 2022 - Jul 2023)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{fontSize: isMobile ? '3vw' : null }}>Intertek, Menlo Park, CA</Typography>
                <Typography variant="subtitle1" style={{fontSize: isMobile ? '3vw' : null }}>Safety Engineer (June 2021 - Jan 2022)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{fontSize: isMobile ? '3vw' : null }}>University of California, Davis, Davis, CA</Typography>
                <Typography variant="subtitle1" style={{fontSize: isMobile ? '3vw' : null }}>Deep Learning Researcher (May 2019 - June 2020)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{fontSize: isMobile ? '3vw' : null }}>Ottimate (formerly PlateIQ), Emeryville, CA</Typography>
                <Typography variant="subtitle1" style={{fontSize: isMobile ? '3vw' : null }}>Software Engineer (June 2018 - Sep 2018)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{fontSize: isMobile ? '3vw' : null }}>TextRecruit, San Jose, CA</Typography>
                <Typography variant="subtitle1" style={{fontSize: isMobile ? '3vw' : null }}>AI Engineer (Aug 2017 - Sep 2018)</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>


      {/* Projects */}
      <ProjectContainer id="projects">
        <Typography variant="h4" component="h2" marginBottom="32px">Projects</Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={2} sx={{ padding: '16px' }}>
                <ProjectTitle variant="h6">
                  {project.name}
                </ProjectTitle>
                <ProjectLink sx={{color: 'black'}} href={project.url} target="_blank" rel="noopener noreferrer">
                  View Project
                </ProjectLink>
                <Box mt={2}>
                  {project.techStack.map((tech, idx) => (
                    <TechChip
                      key={idx}
                      icon={tech.icon}
                      label={tech.label}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </ProjectContainer>

      <Box
      sx={{
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: theme.palette.grey[200],
        padding: theme.spacing(isMobile ? 4 : 8),
      }}
    >
      <Typography variant="h4" gutterBottom sx={{textAlign: "center",  width: '100%'}}>
        Recent Reads
      </Typography>
      <List>
        {['A Random Walk Down Wall Street - Burton Malkiel', 
          'Reinventing banking and finance - Helene Panzarino & Alessandro Hatami', 
          'The Future of Money - Eswar Prasad', 
          'The Changing World Order - Ray Dalio'].map((text, index) => (
            <ListItem key={index} disableGutters>
              <Typography variant="body1">{text}</Typography>
            </ListItem>
        ))}
      </List>
    </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 3%', // Increased padding from the sides
          backgroundColor: '#f5f5f5',
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

    </div>
  );
};

export default LandingPage;
