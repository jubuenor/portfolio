import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import { FaAngellist } from 'react-icons/fa';

function About() {
  return (
    <Container className='about rounded-4 p-4 mt-5 border border-secondary'>
        <div className='mb-3'>
            <h1><FaAngellist color='azure'></FaAngellist>  About me</h1>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='fw-bolder'>Age</p>
            <p>22</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='fw-bolder'>Country</p>
            <p>Colombia</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='fw-bolder'>State</p>
            <p>Bogotá</p>
        </div>
    </Container>
    
  )
}

export default About;