import React from 'react';
import { Container } from 'react-bootstrap';
import './Me.css';


function Me() {
  return (
    <Container className='me rounded-4 p-4 mt-5 border border-secondary'>
            <div className='d-flex header'>
                <div className='m-3 text-center'>
                    <img src="/images/profile.jpg" alt="profile" className='rounded-circle' width={128}/>
                    <p className='bg-success bg-opacity-50 fw-bolder p-1 mt-3 rounded' >Available to hire</p>
                </div>
                <div>
                    <div>
                        <div className="me-2">
                            <h1> Juan Andres Bueno</h1>
                            <p> ⚛️ React frontend developer, backend on NodeJS.</p>
                            <p> 💻 Systems & Computing engineer student</p>
                        </div>
                        <div className="row tech-icons mb-3">
                            <div className='col'>
                                <img src="/images/technologies/html.png" alt="htlm" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/css.png" alt="css" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/js.png" alt="js" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/react.png" alt="react" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/mongo.png" alt="mongo" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/node.png" alt="htlm" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/mysql.png" alt="mysql" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/java.png" alt="java" width={32}/>
                            </div>
                            <div className='col'>
                                <img src="/images/technologies/py.png" alt="py" width={32}/>
                            </div>
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
  )
}

export default Me;