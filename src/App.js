import './App.css';
import AppRouter from './Router/Router';

function App() {
  return (
    <div className="app">
      <div className='main'>
        <AppRouter></AppRouter>
      </div>
      <section>
        <div className="wave"></div>
      </section>
      
    </div>
  );
}

export default App;
