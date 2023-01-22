import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import { FaAngellist } from 'react-icons/fa';

function About() {
  return (
    <div className='row'>
        <Container className='about rounded-4 p-4 mt-5 border border-secondary col-xl-6 col-sm-6'>
            <div className='d-flex'>
                <div className='m-3'>
                    <img src="/images/profile.jpg" alt="profile" className='rounded-circle' width={128}/>
                    <p className='bg-success bg-opacity-50 fw-bolder p-1 mt-3 rounded' >Available to hire</p>
                </div>
                <div>
                    <h1> Juan Andres Bueno</h1>
                    <p> ⚛️ React frontend developer, backend on NodeJS.</p>
                    <p> 💻 Systems & Computing engineer student</p>

                    <div className="d-flex tech-icons">
                        <div>
                            <img src="/images/technologies/html.png" alt="htlm" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/css.png" alt="css" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/js.png" alt="js" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/react.png" alt="react" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/mongo.png" alt="mongo" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/node.png" alt="htlm" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/mysql.png" alt="mysql" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/java.png" alt="java" width={32}/>
                        </div>
                        <div>
                            <img src="/images/technologies/py.png" alt="py" width={32}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mb-3">

                    <h1>Who am I?</h1>

                </div>
                <div>
                    <p>My name is Juan Andres Bueno, I am a Systems & Computing Engineer student at National University of Colombia who likes web development, games and physics.</p>
                    <p></p>
                    <p>I am passionate about learning new things about programming, science and improving my skills.</p>
                </div>


            </div>
        </Container>

        <Container className='about rounded-4 p-4 mt-5 border border-secondary col-xl-3 col-sm-3'>
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


    </div>

    
  )
}

export default About;