import React from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
import { FaHome, FaFolder, FaPortrait, FaLinkedin, FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <Nav className='rounded-4 justify-content-between border border-secondary'>
        <div className='d-flex'>
            <Nav.Item className='ms-3'>
                <Nav.Link>
                    <FaHome className='me-2' size={20}></FaHome>
                    Me
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='ms-3'>
                <Nav.Link>
                    <FaFolder className='me-2' size={20}></FaFolder>
                    Projects
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='ms-3'>
                <Nav.Link>
                    <FaPortrait className='me-2' size={20}></FaPortrait>
                    Contact
                </Nav.Link>
            </Nav.Item>
        </div>
        <div className='d-flex'>
            <Nav.Item className='ms-3'>
                <Nav.Link href='https://www.linkedin.com/in/jubuenor/' target='_blank' >
                    <FaLinkedin className='me-2' size={20}></FaLinkedin>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='ms-3'>
                <Nav.Link href='https://github.com/jubuenor' target='_blank' >
                    <FaGithub className='me-2' size={20}></FaGithub>
                </Nav.Link>
            </Nav.Item>
        </div>
    </Nav>
  )
}

export default Navbar;