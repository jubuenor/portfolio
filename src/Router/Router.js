import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Navbar from '../Components/Navbar/Navbar';

function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<About></About>}></Route>
            <Route exact path='/projects' element={<Projects></Projects>}></Route>
            
        </Routes>    
    
    </BrowserRouter>
  )
}

export default AppRouter;