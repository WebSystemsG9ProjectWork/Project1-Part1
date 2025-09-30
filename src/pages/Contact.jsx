import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from '../context/ToastContext';

function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-vh-100 py-5">
      <Container className="py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '900px' }}>
            Ready to protect your organization from deepfakes? Contact our team to learn 
            more about ForgeLens enterprise solutions.
          </p>
        </div>

        <Row className="g-4">
          {/* Contact Form */}
          <Col lg={6}>
            <Card className="shadow-sm bg-dark bg-opacity-10 border position-relative">
              {/* Floating decorative element */}
              <div 
                className="position-absolute bg-primary bg-opacity-10 rounded-circle floating-element" 
                style={{ 
                  width: '96px', 
                  height: '96px', 
                  top: '-16px', 
                  right: '-16px',
                  filter: 'blur(40px)'
                }}
              />
              
              <Card.Body className="p-4">
                <h2 className="fs-3 fw-bold mb-4">Send us a message</h2>
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-light border"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      className="bg-light border"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your deepfake detection needs..."
                      className="bg-light border"
                      style={{ minHeight: '128px' }}
                    />
                  </Form.Group>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-100"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col lg={6}>
            <div className="d-flex flex-column gap-4">
              <Card className="shadow-sm bg-dark bg-opacity-10 border"
                    style={{ transition: 'box-shadow 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Mail className="text-primary me-3" size={24} />
                    <h3 className="fs-5 fw-semibold mb-0">Email Us</h3>
                  </div>
                  <p className="text-muted mb-1">contact@forgelens.ai</p>
                  <p className="text-muted mb-0">enterprise@forgelens.ai</p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm bg-dark bg-opacity-10 border"
                    style={{ transition: 'box-shadow 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Phone className="text-primary me-3" size={24} />
                    <h3 className="fs-5 fw-semibold mb-0">Call Us</h3>
                  </div>
                  <p className="text-muted mb-1">+1 (555) 123-4567</p>
                  <p className="text-muted small mb-0">Mon - Fri, 9AM - 6PM EST</p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm bg-dark bg-opacity-10 border position-relative overflow-hidden"
                    style={{ transition: 'box-shadow 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'}>
                {/* Floating element */}
                <span 
                  className="position-absolute bg-secondary bg-opacity-10 rounded-circle floating-slow" 
                  style={{ 
                    width: '128px', 
                    height: '128px', 
                    bottom: '-32px', 
                    left: '-32px' 
                  }}
                />
                
                <Card.Body className="p-4 position-relative" style={{ zIndex: 10 }}>
                  <div className="d-flex align-items-center mb-3">
                    <MapPin className="text-primary me-3" size={24} />
                    <h3 className="fs-5 fw-semibold mb-0">Visit Us</h3>
                  </div>
                  <p className="text-muted mb-0">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm bg-dark bg-opacity-10 border">
                <Card.Body className="p-4">
                  <h3 className="fs-5 fw-semibold mb-3">Enterprise Inquiries</h3>
                  <p className="text-muted mb-4">
                    For large-scale deployments, custom integrations, and enterprise partnerships, 
                    our dedicated team is ready to help.
                  </p>
                  <Button
                    variant="outline-primary"
                    className="border-primary text-primary"
                  >
                    Schedule a Demo
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* CSS for floating animations */}
        <style>
          {`
            .floating-element {
              animation: float 6s ease-in-out infinite;
            }
            
            .floating-slow {
              animation: float 8s ease-in-out infinite reverse;
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
          `}
        </style>
      </Container>
    </div>
  );
};

export default Contact;    