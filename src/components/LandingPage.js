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
                <Typography variant="h1" style={{ fontWeight: 'bold' }}>
                  currently building
                </Typography>
            }
            {
              isMobile ?
                <Typography variant="h1" style={{ fontWeight: 'bold', fontSize: '15vw' }}>
                  cool things.
                </Typography>
                :
                <Typography variant="h1" style={{ fontWeight: 'bold' }}>
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
            <Typography variant="h3" style={{ marginTop: '35px', marginBottom: '20px', fontWeight: 'bold' }}>
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
                <Typography variant="h6" style={{ fontSize: isMobile ? '3vw' : null }}>Advocate AI, San Francisco, CA</Typography>
                <Typography variant="subtitle1" style={{ fontSize: isMobile ? '3vw' : null }}>Founder/CEO (March 2023 - Present)</Typography>
              </Box>
              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{ fontSize: isMobile ? '3vw' : null }}>Unstructured, San Francisco, CA</Typography>
                <Typography variant="subtitle1" style={{ fontSize: isMobile ? '3vw' : null }}>Developer Advocate Engineer (July 2023 - December 2023)</Typography>
              </Box>
              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{ fontSize: isMobile ? '3vw' : null }}>Gemini / Nifty Gateway, San Francisco, CA</Typography>
                <Typography variant="subtitle1" style={{ fontSize: isMobile ? '3vw' : null }}>Business Development (January 2022 - July 2023)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{ fontSize: isMobile ? '3vw' : null }}>Intertek, Menlo Park, CA</Typography>
                <Typography variant="subtitle1" style={{ fontSize: isMobile ? '3vw' : null }}>Safety Engineer (June 2021 - January 2022)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{ fontSize: isMobile ? '3vw' : null }}>University of California, Davis, Davis, CA</Typography>
                <Typography variant="subtitle1" style={{ fontSize: isMobile ? '3vw' : null }}>Deep Learning Researcher (May 2019 - June 2020)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{ fontSize: isMobile ? '3vw' : null }}>Ottimate (formerly PlateIQ), Emeryville, CA</Typography>
                <Typography variant="subtitle1" style={{ fontSize: isMobile ? '3vw' : null }}>Software Engineer (June 2018 - September 2018)</Typography>
              </Box>

              <Box style={{ paddingLeft: isMobile ? '10%' : '40px', paddingBottom: '40px', textAlign: 'left' }}>
                <Typography variant="h6" style={{ fontSize: isMobile ? '3vw' : null }}>TextRecruit, San Jose, CA</Typography>
                <Typography variant="subtitle1" style={{ fontSize: isMobile ? '3vw' : null }}>AI Engineer (August 2017 - September 2018)</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>


      <Box
        sx={{
          minHeight: '10vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: "white",
          padding: theme.spacing(isMobile ? 4 : 8),
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', }}>
          Projects
        </Typography>
        <List>
          {[
            {
              name: 'Advocate AI',
              description: 'Helps college students and young professionals understand and navigate the legal world. Went through Founder University Cohort 7.',
              techStack: 'Vercel, React, Spring Boot (Django for v0), AWS, Mistral & GPT',
              link: 'https://www.advocateai.xyz/', // Replace with actual link to project
            },
            {
              name: 'Vent AI - Being Built',
              description: 'A digital person to help solve the loniliness pandemic.',
              techStack: 'Vercel, Next.js, Tailwind, Spring Boot, AWS, GPT (LLMs), Elevan Labs',
              link: '/', // Replace with actual link to project
            },
            {
              name: 'R.A. Scheuring',
              description: 'Built a portfolio website for an Author. Updated her website to use the latest technologies and best practices.',
              techStack: 'Vercel, Next.js, Tailwind, Mailchimp',
              link: 'https://rascheuring.vercel.app/', // Replace with actual link to project
            },
            {
              name: 'The Baller Society',
              description: 'Built technology to connect physical items to digital databases.',
              techStack: 'Vercel, React, Solana, NFTs, NFCs',
              link: 'https://twitter.com/BallerSociety_', // Replace with actual link to project
            },
            // Add other projects here in similar structure
          ].map((project, index) => (
            <ListItem key={index} disableGutters sx={{ marginBottom: theme.spacing(2) }}>
              <Box>
                <Link href={project.link} target="_blank" rel="noopener" sx={{ textDecoration: 'none' }}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                    {project.name}
                  </Typography>
                </Link>
                <Typography variant="body2" component="div" sx={{ marginTop: theme.spacing(1) }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" component="div" sx={{ marginTop: theme.spacing(1), fontStyle: 'italic' }}>
                  Tech Stack: {project.techStack}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>


      <Box
        sx={{
          minHeight: '10vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: "#EEEEEE",
          padding: theme.spacing(isMobile ? 4 : 8),
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: 'bold', width: '100%' }}>
          Recent Reads
        </Typography>
        <List>
          {['A Random Walk Down Wall Street - Burton Malkiel',
            'Reinventing banking and finance - Helene Panzarino & Alessandro Hatami',
            'The Future of Money - Eswar Prasad',
            'The Changing World Order - Ray Dalio',
            'Sapiens - Yuval Noah Harari',
            'Capital - Thomas Piketty'
          ].map((text, index) => (
            <ListItem key={index} disableGutters>
              <Typography variant="body1">{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

    </div>
  );
};

export default LandingPage;
