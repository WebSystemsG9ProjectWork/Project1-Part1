import { ArrowRight, Database, Eye, Cpu, BarChart3, Globe } from "lucide-react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTheme } from '../context/ThemeContext'; 
import  missionImage  from '../assets/about_us.png';

function About(){
  const { theme, toggleTheme } = useTheme();

  const pipelineSteps = [
    { icon: Globe, label: "Social Network X", description: "Images ingestion from various platforms" },
    { icon: Eye, label: "Vision Analysis", description: "Image processing using Google Vision API" },
    { icon: Cpu, label: "Gemini API", description: "Advanced reasoning and pattern recognition" },
    { icon: Database, label: "Firestore", description: "Secure data storage and processing" },
  ];

  const faqs = [
    {
      question: "How accurate is PhishLens detection?",
      answer: "Our multi-modal approach combining computer vision and LLM reasoning achieves 94% accuracy on benchmark datasets, with continuous improvements through machine learning."
    },
    {
      question: "What types of manipulation can PhishLens detect?",
      answer: "We detect deepfakes, face swaps, background replacements, object insertion/removal, and subtle pixel-level manipulations across images and videos."
    },
    {
      question: "Is PhishLens suitable for enterprise use?",
      answer: "Yes, PhishLens is designed for enterprise scale with API integration, bulk processing capabilities, and enterprise-grade security compliance."
    },
    {
      question: "How fast is the detection process?",
      answer: "Most images are processed within 2-5 seconds, with real-time streaming capabilities for video content analysis."
    }
  ];

  return (
    <div className={theme === 'light' ? 'min-vh-100 py-5 bg-light text-dark' : 'min-vh-100 py-5 bg-dark text-white'}>
      <Container className="py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4 text-white">
            <span className={theme === 'light' ? 'text-dark' : 'text-white'} >About</span> <span className="text-primary">PhishLens</span>
          </h1>
          <p className={theme === 'light' ? 'fs-5 text-dark mx-auto' : 'fs-5 text-light mx-auto'} style={{ maxWidth: '900px' }}>
            We're pioneering the future of media authenticity verification through advanced AI, 
            protecting organizations and individuals from the growing threat of synthetic media.
          </p>
        </div>

        {/* Pipeline Architecture */}
        <section className="mb-5">
          <h2 className="display-6 fw-bold text-center mb-5 text-white">
            <span className={theme === 'light' ? 'text-dark' : 'text-white'} >Our</span> <span className="text-primary">Detection Pipeline</span>
          </h2>
          
          <Card className="p-4 bg-secondary bg-opacity-25 border-secondary shadow-sm">
            <Card.Body>
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
                {pipelineSteps.map((step, index) => (
                  <div key={index} className="d-flex flex-column align-items-center text-center position-relative">
                    <div className="p-3 rounded-circle bg-primary bg-opacity-25 mb-3" 
                         style={{ transition: 'background-color 0.3s' }}
                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(13, 110, 253, 0.4)'}
                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(13, 110, 253, 0.25)'}>
                      <step.icon size={32} className="text-primary" />
                    </div>
                    <h3 className={theme === 'light' ? 'text-dark fw-semibold mb-2' : 'fw-semibold mb-2 text-white'}>{step.label}</h3>
                    <p className={theme === 'light' ? 'text-dark small' : 'text-light small'} style={{ maxWidth: '128px' }}>{step.description}</p>
                    
                    {index < pipelineSteps.length - 1 && (
                      <ArrowRight 
                        size={24} 
                        className="text-primary opacity-75 mt-3 d-none d-lg-block position-absolute" 
                        style={{ right: '-40px' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </section>

        {/* Mission Statement */}
        <section className="mb-5 text-center mission-section">
          <Card className="bg-secondary bg-opacity-25 border-secondary shadow-sm">
            <Card.Body className="p-5">
              <h2 className={theme === 'light' ? 'fs-3 fw-bold mb-4 text-dark' : 'fs-3 fw-bold mb-4 text-white'}>Our Mission</h2>
              <div className="d-flex">
                <p className={theme === 'light' ? 'fs-5 text-muted mx-auto text-dark' : 'fs-5 mx-auto text-white'} style={{ maxWidth: '1000px', lineHeight: '1.8' }}>
                <div className="mission-text">
                    In an era where synthetic media can be weaponized to spread misinformation, 
                    manipulate markets, and damage reputations, PhishLens stands as a guardian of truth. 
                    We combine cutting-edge computer vision with advanced language models to create 
                    the most sophisticated deepfake image detection system.
                  </div>
                </p>
                <div class="mission-image">
                  <img src={missionImage}/>
                </div>
              </div>
            </Card.Body>
          </Card>
        </section>

        {/* FAQ Section */}
        {/* <section>
          <h2 className="display-6 fw-bold text-center mb-5 text-white">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          
          <Row className="g-4">
            {faqs.map((faq, index) => (
              <Col md={6} key={index}>
                <Card className="h-100 bg-secondary bg-opacity-25 border-secondary shadow-sm" 
                      style={{ transition: 'box-shadow 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(13, 110, 253, 0.3)'}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.3)'}>
                  <Card.Body className="p-4">
                    <h3 className="fw-semibold mb-3 text-white">{faq.question}</h3>
                    <hr className="my-3 border-secondary" />
                    <p className="text-light mb-0" style={{ lineHeight: '1.8' }}>{faq.answer}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section> */}
      </Container>
    </div>
  );
};

export default About;