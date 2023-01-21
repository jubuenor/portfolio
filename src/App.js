import './App.css';
import NavBar from './Components/Navbar/Navbar';
import About from './Components/About/About';

function App() {
  return (
    <div className="app">
      <div className='main'>
        <NavBar></NavBar>
        <About></About>
      </div>
      <section>
        <div className="wave"></div>
      </section>
      
    </div>
  );
}

export default App;
