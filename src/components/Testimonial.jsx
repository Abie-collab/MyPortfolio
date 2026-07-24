import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {

  const testimonials = [
    {
      name: "Samuel Odulade",
      role: "Trainer, Moat Academy",
      text: "Abiola is hardworking, dedicated, and consistently eager to learn — the kind of developer who shows up ready to put in the work, every time",
      initial: "S"
    },
    {
      name: "Steve Balogun",
      role: "IT Infastruture Lead, 9PSB   ",
      text: "I saw firsthand how much time and effort Abiola poured into the bootcamp — always pushing to understand concepts deeply, not just get by. That level of commitment says a lot about the kind of developer she'll be",
      initial: "S"
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-2">What People Say</h2>
        
        <Row className="g-4">
          {testimonials.map((item, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-sm border-0 p-4 bg-white">
                <Card.Body className="d-flex flex-column">
                  {/* Quote Icon */}
                  <div className="mb-3 text-primary" style={{ fontSize: '2rem', lineHeight: 1 }}>
                    &#10077;
                  </div>
                  
                  <p className="text-muted fst-italic flex-grow-1 mb-4">
                    "{item.text}"
                  </p>
                  
                  <div className="d-flex align-items-center mt-auto">
                    {/* Simple CSS Avatar */}
                    <div 
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold" 
                      style={{ width: '50px', height: '50px', fontSize: '1.2rem', flexShrink: 0 }}
                    >
                      {item.initial}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{item.name}</h6>
                      <small className="text-muted">{item.role}</small>
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

export default Testimonials;