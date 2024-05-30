
import './App.css';
import About from './conponents/About/About';
import Main from './conponents/main/Main';
import Navbar from './conponents/navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Main/>
    </div>
  );
}

export default App;
