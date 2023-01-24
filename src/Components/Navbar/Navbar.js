import React from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
import { FaHome, FaFolder, FaPortrait, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav className='rounded-4  border border-secondary'>
        <div className='d-flex'>
            <Nav.Item>
                <Link className='nav-link' to='/'>
                    <FaHome className='me-2' size={20}></FaHome>
                    <span>Me</span>
                </Link>
            </Nav.Item>
            <Nav.Item >
                <Link className='nav-link' to='/projects'>
                    <FaFolder className='me-2' size={20}></FaFolder>
                    <span>Projects</span>
                </Link>
            </Nav.Item>
            <Nav.Item >
                <Link className='nav-link' to='/contact'>
                    <FaPortrait className='me-2' size={20}></FaPortrait>
                    <span>Contact</span>
                </Link>
            </Nav.Item>
        </div>
        <div className='d-flex'>
            <Nav.Item >
                <Nav.Link href='https://www.linkedin.com/in/jubuenor/' target='_blank' >
                    <FaLinkedin className='me-2' size={20}></FaLinkedin>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link href='https://github.com/jubuenor' target='_blank' >
                    <FaGithub className='me-2' size={20}></FaGithub>
                </Nav.Link>
            </Nav.Item>
        </div>
    </Nav>
  )
}

export default Navbar;