import React from 'react';
import './About.css';
import { Text, Paragraph, Heading} from 'grommet';

function About() {
    return (
        <div className="about-container">
            <Heading color="#F26C0B">Hi !</Heading>
            <Paragraph className="portfolio-about" style={{maxWidth:'100%'}}>
                I am a full stack developer based in Halifax, Canada. I'm currently into my graduate studies at StFX majoring in Applied Computer Science.
                I am an enthusiastic developer who contantly keeps himself busy with learning new stuff and developing user friendly products.

            </Paragraph>
            <Paragraph className="portfolio-about" style={{maxWidth:'100%'}} color="brand">
                I am currently learning Machine Learning and Data Science related stuff, If you interested lets speak ! 
            </Paragraph>
        </div>
    )
}

export default About;