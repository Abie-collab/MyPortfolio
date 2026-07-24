import { Container } from 'react-bootstrap';
import NavbarComponent from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Testimonial from './components/Testimonial.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function Portfolio() {
  return (
    <div className="App">
      <NavbarComponent />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonial />
        <Contact />
      </main>
      <footer className="bg-black text-white text-center py-3">
        <Container>
          <p className="mb-0 small">&copy; {new Date().getFullYear()} Abiola ONI.All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Portfolio;