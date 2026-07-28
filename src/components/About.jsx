import { Container, Row, Col } from 'react-bootstrap';

import profileImg from '../assets/profile.png'; 

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4">About Me</h2>
            <p>
              I'm a Full Stack Web Developer who bridges the gap between business operations and clean code. Before writing production software, I spent years in IT Service Management, managing enterprise customer pain points and service delivery. That experience taught me how to identify real operational bottlenecks. Today, I channel that business acumen into building scalable applications that don't just work technically—they solve actual business problems.
            </p>
            <p>
              I'm passionate about continuous learning and believe the best software comes from understanding both the technology and the people who use it.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img 
              src={profileImg} 
              alt="Abiola Oni - Full Stack Developer" 
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '300px' }} 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;