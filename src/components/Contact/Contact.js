import { Anchor, Text } from 'grommet';
import React from 'react';
import './Contact.css'

function Contact (){
    return (
        <div className="contact-container" style={{padding:"10%"}}>
                <Text style={{fontFamily:"Rubik-Light"}}>
                    There are many ways to contact me ! but the better is to reach me through e-mail -  
                </Text>
                <Anchor href="mailto:girirajsekar50@gmail.com" color="#F26C0B"> Here !</Anchor> 
        </div>
    )
}

export default Contact;