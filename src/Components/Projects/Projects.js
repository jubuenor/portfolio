import React from 'react';
import { Container, Card} from 'react-bootstrap';
import { FaSeedling } from 'react-icons/fa';

import './Projects.css';

function Projects() {
  return (
    <Container className='projects row justify-content-around rounded-4 p-4 mt-5 border border-secondary'>
      <Card className='col-xl-4 mb-3' >
        <div className="text-center mt-2">

          <FaSeedling size={80} color="aliceblue"></FaSeedling>

        </div>
        <Card.Body>
          <Card.Title>Blogging App</Card.Title>
          <Card.Text>
           This MERN app allows you to create, publish a weblog online and interact with others.
          </Card.Text>
          <div className='d-flex justify-content-evenly'>
            <a className='btn btn-secondary' href="https://jubuenor.github.io/blg-front/" target="_blank" rel='noreferrer'>Web site</a>
            <a className='btn btn-secondary' href="https://github.com/jubuenor/simple-crud-app" target="_blank" rel='noreferrer'>Github</a>
          </div>

        </Card.Body>
      </Card>

      <Card className='col-xl-4 mb-3' >
        <Card.Img src='/images/portfolio/ecomerce.png' alt='ecommerce' className='mt-2' height={80}></Card.Img>
        <Card.Body>
          <Card.Title>E-commerce App</Card.Title>
          <Card.Text>
            E-commerce focused on food sales. This app has crud functionality. <span className='text-info'>To Update</span>
          </Card.Text>
          <div className='d-flex justify-content-evenly'>
            <a className='btn btn-secondary disabled' href="https://jubuenor.github.io/blg-front/" target="_blank" rel='noreferrer'>Web site</a>
            <a className='btn btn-secondary' href="https://github.com/jubuenor/Ciclo4" target="_blank" rel='noreferrer'>Github</a>
          </div>

        </Card.Body>
      </Card>

      <Card className='col-xl-4 mb-3' >
        <Card.Img src='/images/portfolio/figma.png' alt='figma' className='mt-2' height={80}></Card.Img>
        <Card.Body>
          <Card.Title>Figma Landing Page</Card.Title>
          <Card.Text>
            A clone of a landing page of Figma using React. 
            <br />
            <br />
          </Card.Text>
          <div className='d-flex justify-content-evenly'>
            <a className='btn btn-secondary disabled' href="https://jubuenor.github.io/blg-front/" target="_blank" rel='noreferrer'>Web site</a>
            <a className='btn btn-secondary' href="https://github.com/jubuenor/Figma-LP-clone" target="_blank" rel='noreferrer'>Github</a>
          </div>
        </Card.Body>
      </Card>

      <Card className='col-xl-4 mb-3' >
        <Card.Img src='/images/portfolio/shutemall.png' alt='shutemall' className='mt-2' height={80}></Card.Img>
        <Card.Body>
          <Card.Title>Shut em' all</Card.Title>
          <Card.Text>
            A python game using Pygame based on the clasic space imact Nokia mobile game.
            <br />
            <br />
          </Card.Text>
          <div className='d-flex justify-content-evenly'>
            <a className='btn btn-secondary disabled' href="https://jubuenor.github.io/blg-front/" target="_blank" rel='noreferrer'>Web site</a>
            <a className='btn btn-secondary' href="https://github.com/jubuenor/ShutEmAll" target="_blank" rel='noreferrer'>Github</a>
          </div>
        </Card.Body>
      </Card>

      <Card className='col-xl-4 mb-3' >
        <Card.Img src='/images/portfolio/quantumgames.png' alt='quantumgames' className='mt-2' height={80}></Card.Img>
        <Card.Body>
          <Card.Title>Shut em' all</Card.Title>
          <Card.Text>
            A python game using Pygame which everybody cand learn about basic quantum mechanics.
          </Card.Text>
          <div className='d-flex justify-content-evenly'>
            <a className='btn btn-secondary disabled' href="https://jubuenor.github.io/blg-front/" target="_blank" rel='noreferrer'>Web site</a>
            <a className='btn btn-secondary' href="https://github.com/jubuenor/QuantumGames" target="_blank" rel='noreferrer'>Github</a>
          </div>
        </Card.Body>
      </Card>
      



    </Container>
  )
}

export default Projects;