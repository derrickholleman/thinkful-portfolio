import './App.css';
import Nav from './Components/Nav';
import Intro from './Components/Intro';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Intro />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
