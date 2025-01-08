import './App.css';
import Navbar from './components/navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ScrollButton from './components/scrollButton';

function App() {
  return (
    <div className="h-screen overflow-hidden ">
      <Navbar />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Secciones con id correspondientes */}
        <Home />
        <About />
        <Projects />
        <Contact />
        
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
