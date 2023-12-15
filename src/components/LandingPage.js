import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, ListItem, List, Link, IconButton } from '@mui/material';
import pfp from "../assets/pfp.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LandingPage = () => {

  const projects = [
    { name: "Advocate AI - Legal Analysis Tool Kit", url: "https://www.advocateai.xyz/" },
    // Add more projects here
  ];

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
          <Box style={{ marginLeft: '5%', width: '100%' }}>
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
                  (hopefully) cool things
                </Typography>
                :
                <Typography variant="h1" style={{ fontWeight: 'bold'}}>
                  (hopefully) cool things
                </Typography>
            }
            <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bold', marginTop: '2%' }}>
              - Jack Retterer
            </Typography>
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
              I want to build products that help the world. That's pretty much it. I am a firm believer that technology has the potential to benefit the world. And when you build a good enough product its almost like a gift to the user.
          </Typography>
            <Typography variant="body1" paragraph>
              My biggest interests are in crypto, AI and space. I've worked in some capacity in all three, spending most of my time in AI.
          </Typography>
            <Typography variant="body1" paragraph style={{ marginBottom: '50px' }}>
              I am "jack" of all trades. I am capable of writing code but I view myself more as a builder. I know frontend, machine learning, data analysis and a little bit of backend.
              Outside of working and building projects I like skiing, running, art, lifting, baking and being outside.
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
      <Box
        id="projects"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: "#FFFF",
          padding: '5% 10%', // Reduced padding for better mobile view
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '2rem' }}>Projects</Typography>

        {projects.map((project, index) => (
          <Box key={index} style={{ marginBottom: '1rem' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              {project.name}
            </Typography>
            <Link href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant="body1" style={{ color: '#0077b5' }}>View Project</Typography>
            </Link>
          </Box>
        ))}
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
          <IconButton color="inherit" href="https://linkedin.com/jackretterer" target="_blank" sx={{ '&:hover': { backgroundColor: 'transparent', opacity: 1 } }}>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
          </IconButton>
        </Box>
      </Box>

    </div>
  );
};

export default LandingPage;
