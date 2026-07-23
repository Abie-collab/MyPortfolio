import { Container } from 'react-bootstrap';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function Portfolio() {
  return (
    <div className="App">
      <NavbarComponent />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-black text-white text-center py-3">
        <Container>
          <p className="mb-0 small">&copy; {new Date().getFullYear()} Abiola ONI</p>
        </Container>
      </footer>
    </div>
  );
}

export default Portfolio;