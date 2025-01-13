import Navbar from './components/ui/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 animate-gradient-x">
      <Navbar />

      {/* HOME SECTION */}
      <Home />
      {/* ABOUT SECTION */}
      <About />
      {/* PROJECTS */}
      <Projects />
      {/* SKILLS */}
      <Skills />
      {/* CONTACT */}
      <Contact/>
    </div>
  );
}
