import { Button, Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="bg-light py-5 mt-5 text-center">
      <Container className="py-5">
        <h1 className="display-4 fw-bold">Hi, I'm Abiola ONI</h1>
        <p className="lead text-muted mb-4">
          I'm a Full Stack Web Developer specializing in <strong>React</strong>, <strong>PHP</strong> and <strong>Laravel</strong>. <br/>
          I build scalable, containerized web applications with clean architecture.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <Button variant="primary" size="lg" href="#projects">View My Work</Button>
          <Button variant="outline-secondary" size="lg" href="/resume.pdf" target="_blank">Download Resume</Button>
        </div>
      </Container>
    </section>
  );
};
export default Hero;