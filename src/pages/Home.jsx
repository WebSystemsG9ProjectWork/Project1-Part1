import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-before-after-slider-component/dist/build.css';
import { Eye, Brain, Shield } from "lucide-react";
import { useTheme } from '../context/ThemeContext'; 

function Home (){
    const { theme, toggleTheme } = useTheme();
  
  const features = [
    {
      icon: Eye,
      title: "Vision OCR",
      description: "Advanced computer vision algorithms detect subtle inconsistencies in image metadata and pixel patterns.",
    },
    {
      icon: Brain,
      title: "Visual Cues",
      description: "AI-powered analysis identifies manipulation artifacts like unnatural lighting, shadows, and facial distortions.",
    },
    {
      icon: Shield,
      title: "LLM Reasoning",
      description: "Large language models provide contextual analysis and confidence scoring for comprehensive detection.",
    },
  ];

  return (
    <div className={theme === 'light' ? 'min-vh-100 bg-light' : 'min-vh-100 bg-dark'}>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold mb-3">
            Spot Fake Images
          </h1>
          <h2 className="display-5 text-primary fw-bold mb-4 bg-gradient-primary">
            in Seconds
          </h2>
          <p className="lead mb-4 white">
            Identify Deepfake images in seconds with PhishLens using our smart Vision based analysis
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Button
              size="lg"
              className="btn btn-primary"
              as="a"
              href="https://inspector.phishlens.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Deepfake Inspector <i className="bi bi-arrow-right"></i>
            </Button>
            <Button
              size="lg"
              variant="outline-primary"
              as={Link}
              to="/about"
            >
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-secondary bg-opacity-10">
        <Container>
          <h2 className="text-center mb-5">
            <span className="white">Powered by</span> <span className="text-primary">Advanced AI</span>
          </h2>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 text-dark shadow-sm">
                  <Card.Body>
                    <div className="mb-3 p-3 bg-primary bg-opacity-10 rounded">
                      <feature.icon/>
                    </div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Home;