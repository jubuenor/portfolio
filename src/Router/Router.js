import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Navbar from '../Components/Navbar/Navbar';
import Me from '../Components/Me/Me';
import Contact from '../Components/Contact/Contact';

function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <div className="row justify-content-between">
          <div className="col-xl-8 col-md-9 col-xs-12">
            <Routes>
                <Route exact path='/' element={<Me></Me>}></Route>
                <Route exact path='/projects' element={<Projects></Projects>}></Route>
                <Route exact path='/contact' element={<Contact></Contact>}></Route>
                
            </Routes>    
          </div>
          <div className="col-xl-3 col-md-3 col-xs-6">
            <About></About> 
          </div>
        </div>
        
    
    </BrowserRouter>
  )
}

export default AppRouter;