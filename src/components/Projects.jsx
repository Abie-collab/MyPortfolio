import { projectsData } from '../data/portfolioData';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">Featured Projects</h2>
        <Row className="g-4">
          {projectsData.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 project-card">
                <div className="project-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted small">{project.description}</Card.Text>
                  
                  {/* Problem & Solution */}
                  <div className="my-3">
                    <p className="mb-1 small"><strong>The Challenge:</strong> {project.challenge}</p>
                    <p className="mb-0 small"><strong>The Solution:</strong> {project.solution}</p>
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div className="mt-auto">
                    <div className="mb-3">
                      {project.techStack.map((tech, index) => (
                        <Badge key={index} bg="secondary" className="me-1 mb-1">{tech}</Badge>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <Button variant="outline-primary" size="sm" href={project.liveUrl} target="_blank">Live Demo</Button>
                      <Button variant="outline-dark" size="sm" href={project.githubUrl} target="_blank">GitHub</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;