import React from 'react';
import { Text, Grid, Heading, Anchor } from 'grommet';


function Inspiration() {
    return(
        <div className="inspiration-container">
                <Heading color="#F26C0B">Inspirations !</Heading>
                <Grid dir="column">
                <Text style={{fontFamily:"Rubik-Light"}}>
                    I am a biggest fan of technology ! So the people who have thrived for a change is always an inspiration 
                    to me, Hence I follow <Anchor href="https://www.linkedin.com/in/girish1/" target="_blank">Girish Mathrobootham</Anchor>,  
                    <Anchor href="https://en.wikipedia.org/wiki/Steve_Jobs" target="_blank">Steve Jobs</Anchor>,  
                    <Anchor href="https://patrickcollison.com/about" target="_blank">Patrick Collison</Anchor> a lot. They are some kinda motivation to me.
                </Text>
                </Grid>
        </div>);
}

export default Inspiration