import { useState } from "react";
import Button from 'react-bootstrap/Button';
import MapContainer from "./MapContainer";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext'; 


function Contact(){
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const web3FormData = new FormData(event.target);


    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Email is not valid");
      return;
    }

    Object.entries(formData).forEach(([key, value]) => {
      web3FormData.set(key, value);
    });

    web3FormData.append("access_key", "4ee1cb82-7032-44f0-ad75-cbc496f874b1");

    const object = Object.fromEntries(web3FormData);
    const json = JSON.stringify(object);
    toast.info('Sending the message.');

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
    }
    setFormData({ name: "", email: "", message: "" });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //    if (!formData.name || !formData.email || !formData.message) {
  //     toast.error('Please fill in all fields');
  //     return;
  //   }
  //   // 
  //   setFormData(prev => ({
  //   ...prev,
  //   "access-key": ""
  // }));
  //   // setFormData(formData.append("abc", "123"));

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     toast.error(data.message)
  //   }  
  //   setFormData({ name: "", email: "", message: "" });
  // };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={theme === 'light' ? 'min-vh-100 py-5 bg-light text-dark' : 'min-vh-100 py-5 bg-dark text-white'}>
      <Container className="py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4 text-white">
            <span className={theme === 'light' ? 'text-dark' : 'text-white'} >Get in</span>
            <span className="text-primary">Touch</span>
          </h1>
          <p className={theme === 'light' ? 'fs-5 text-dark mx-auto' : 'fs-5 text-light mx-auto'} style={{ maxWidth: '900px' }}>
            Ready to protect your organization from deepfakes? Contact our team to learn 
            more about PhishLens enterprise solutions.
          </p>
        </div>

        <Row className="g-4">
          {/* Contact Form */}
          <Col lg={6}>
            <Card className="shadow-sm bg-secondary bg-opacity-25 border-secondary position-relative">
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
                <h2 className={theme === 'light' ? 'fs-3 fw-bold mb-4 text-dark' : 'fs-3 fw-bold mb-4 text-white'}>Send us a message</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className={theme === 'light' ? 'text-dark' : 'text-white'}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={theme === 'light' ? 'bg-white text-dark border-white' : 'bg-dark text-white border-secondary'}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label className={theme === 'light' ? 'text-dark' : 'text-white'}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      className={theme === 'light' ? 'bg-white text-white border-white' : 'bg-dark text-white border-secondary'}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label className={theme === 'light' ? 'text-dark' : 'text-white'}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your deepfake detection needs..."
                      className={theme === 'light' ? 'bg-white text-dark border-white resize-none' : 'bg-dark text-white border-secondary resize-none'}
                      style={{ minHeight: '128px' }}
                    />
                  </Form.Group>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-100"
                  >
                    <Send className="me-2" size={20} />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col lg={6}>
            <div className="d-flex flex-column gap-4">
              <Card className="shadow-sm bg-secondary bg-opacity-25 border-secondary"
                    style={{ transition: 'box-shadow 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(13, 110, 253, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.3)'}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Mail className="text-primary me-3" size={24} />
                    <h3 className={theme === 'light' ? 'fs-5 fw-semibold mb-0 text-dark' : 'fs-5 fw-semibold mb-0 text-white'}>Email Us</h3>
                  </div>
                  <p className={theme === 'light' ? 'text-dark mb-1' : 'text-light mb-1'}>contact@forgelens.ai</p>
                  <p className={theme === 'light' ? 'text-dark mb-0' : 'text-light mb-0'}>enterprise@forgelens.ai</p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm bg-secondary bg-opacity-25 border-secondary"
                    style={{ transition: 'box-shadow 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(13, 110, 253, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.3)'}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Phone className="text-primary me-3" size={24} />
                    <h3 className={theme === 'light' ? 'fs-5 fw-semibold mb-0 text-dark' : 'fs-5 fw-semibold mb-0 text-white'}>Call Us</h3>
                  </div>
                  <p className={theme === 'light' ? 'text-dark mb-1' : 'text-light mb-1'}>+1 (555) 123-4567</p>
                  <p className={theme === 'light' ? 'text-dark mb-0' : 'text-light mb-0'}>Mon - Fri, 9AM - 6PM EST</p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm bg-secondary bg-opacity-25 border-secondary position-relative overflow-hidden"
                    style={{ transition: 'box-shadow 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(13, 110, 253, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.3)'}>
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
                    <h3 className={theme === 'light' ? 'fs-5 fw-semibold mb-0 text-dark' : 'fs-5 fw-semibold mb-0 text-white'}>Visit Us</h3>
                  </div>
                   <MapContainer />
                  <p className={theme === 'light' ? 'text-dark mb-0' : 'text-light mb-0'}>
                    25800 Carlos Bee Blvd,<br />
                    Hayward, CA, 94542<br />
                    United States
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* CSS for floating animations and placeholder visibility */}
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

            /* Make placeholders visible on dark background */
            .bg-dark.text-white::placeholder {
              color: #adb5bd !important;
              opacity: 1;
            }
            
            .bg-dark.text-white::-webkit-input-placeholder {
              color: #adb5bd !important;
              opacity: 1;
            }
            
            .bg-dark.text-white::-moz-placeholder {
              color: #adb5bd !important;
              opacity: 1;
            }
          `}
        </style>
      </Container>
    </div>
  );
};

export default Contact;