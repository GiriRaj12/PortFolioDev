import { Anchor, Grid, Text } from 'grommet';
import React from 'react';
import './Contact.css'

function Contact (){
    return (
        <div className="contact-container" style={{padding:"10%"}}>
                <Grid dir="column" gap="small">
                <Text style={{fontFamily:"Rubik-Light"}}>
                    There are many ways to contact me ! but the better is to reach me through e-mail -  
                    <Anchor href="mailto:girirajsekar50@gmail.com" color="#F26C0B"> Here !</Anchor> 
                </Text>
                <Text style={{fontFamily:"Rubik-Light"}}>
                    Or Just give me a call ! <Anchor href="tel:902-318-8748" color="#F26C0B">Here !</Anchor>
                </Text>
                </Grid>
        </div>
    )
}

export default Contact;