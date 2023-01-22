import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <div className='row'>
        <Container className='about rounded-4 p-4 mt-5 border border-secondary col-xl-6 col-sm-6'>
        <div className='d-flex'>
            <div className='m-3'>
                <img src="/images/profile.jpg" alt="profile" className='rounded-circle' width={128}/>
                <p className='bg-success bg-opacity-50 fw-bolder p-1 mt-3' >Available to hire</p>
            </div>
            <div>
                <h1> Juan Andres Bueno</h1>
                <p> ⚛️ React frontend developer, backend on NodeJS.</p>
                <p> 💻 Systems & Computing engineer</p>
            </div>

        </div>
        
            <h1>Who am I?</h1>
        </Container>

        <Container className='about rounded-4 p-4 mt-5 border border-secondary col-xl-3 col-sm-3'>
            <h1>About me</h1>
        </Container>


    </div>

    
  )
}

export default About;