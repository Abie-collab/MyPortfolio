import { Container, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white text-center">
      <Container>
        <h2 className="fw-bold mb-3">Let's Build Something Great Together</h2>
        <p className="lead mb-4">I'm currently open to junior frontend,backend and full-stack opportunities. Let's connect!</p>
        <div className="d-flex gap-3 justify-content-center">
          <Button variant="primary" href="mailto:oniolaronke@gmail.com">Email Me</Button>
          <Button variant="outline-light" href="https://www.linkedin.com/in/oni-abiola/" target="_blank">LinkedIn</Button>
          <Button variant="outline-light" href="https://github.com/Abie-collab" target="_blank">GitHub</Button>
        </div>
      </Container>
    </section>
  );
};
export default Contact;