import './App.css';
import Home from './Component/Home';
// import Navbar from './Component/Navbar';
import About from './Component/About';
import Services from './Component/Services';
import Countdown from './Component/Countdown';
import Cta from './Component/Cta';
function App() {
  return (
    <div className="App">
    <Home />
      <About />
      <Services />
      <Countdown />
      <Cta />
    </div>
  );
}

export default App;
