import React from 'react';
import './Contact.css';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';


function Contact() {
  return (
    <Container className='contact rounded-4 p-4 mt-5 border border-secondary'>
        <h1>Want to hire me?</h1>
        
        <p>Interestes in working together? You can contact me on Linkedin, Github and mail.</p>
        <p></p>
        <div className='mt-3'>
            
            <a href='https://www.linkedin.com/in/jubuenor/' target='_blank' >
                <FaLinkedin className='me-2' size={20}></FaLinkedin>
            </a>
            <a href='https://github.com/jubuenor' target='_blank' >
                <FaGithub className='me-2' size={20}></FaGithub>
            </a>
            <a href='mailto:jubuenor@unal.edu.co' target='_blank' >
                <GrMail className='me-2' size={20}></GrMail>
            </a>

        </div>

    </Container>
  )
}

export default Contact;