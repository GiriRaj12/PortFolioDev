import React, { useState } from 'react';
import giri_photo from './assets/giri_photo.svg';
import './App.css';
import { Anchor, Box, Grid, Heading } from 'grommet';
import { Facebook, Github, Linkedin } from 'grommet-icons';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

function App() {
  const [choise, setChoise] = useState('About');

  return (
    <div className="App">
      <Box
        direction="row"
        pad="medium"
      >
        <Anchor onClick={() => setChoise("About")}>
          <img className="porfolio-image" src={giri_photo} alt="Giri Raj"></img>
        </Anchor>
        <Box direction="column" style={{ padding: "2%" }}>
          <Heading margin="none" className="porfolio-name">Giri Raj</Heading>
          <div className="ink-mark"></div>
          <Box gridArea="sub" direction="row" pad="medium">
            <Anchor icon={<Linkedin />}  target="_blank" href="https://www.linkedin.com/in/giriraj-12/"></Anchor>
            <Anchor icon={<Facebook />} target="_blank" href="https://www.facebook.com/giri.mass2/"></Anchor>
            <Anchor icon={<Github />} target="_blank" href="https://github.com/GiriRaj12?tab=repositories"></Anchor>
          </Box>
          <Box direction="row">
            <Anchor className="portfolio-tabs" onClick={() => setChoise("About")}>About</Anchor>
            <Anchor className="portfolio-tabs" onClick={() => setChoise("Projects")}>Projects</Anchor>
            <Anchor className="portfolio-tabs" onClick={() => setChoise("Experience")}>Experience</Anchor>
            <Anchor className="portfolio-tabs" onClick={() => setChoise("Contact")}>Contact</Anchor>
          </Box>
        </Box>
      </Box>
      <Grid
        rows={['small', 'small']}
        columns={['small', 'large']}
        gap="small"
        areas={[
          { name: 'main', start: [1, 0], end: [1, 1] },
        ]}
      >
        <Box gridArea="main">
          <Box style={{ width: "100%" }}>
            {displayByChoise(choise)}
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

function displayByChoise(choise) {
  switch (choise) {
    case 'About': return <About></About>
    case 'Projects': return <Projects></Projects>
    case 'Experience': return <Experience></Experience>
    case 'Contact': return <Contact></Contact>
    default : return <div>Nothing ! </div>
  }
}

export default App;
