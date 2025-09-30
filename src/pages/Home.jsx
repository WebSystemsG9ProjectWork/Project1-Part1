import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import deepfakeComparison from "../assets/deepfake-comparison.jpg";

function Home (){
  const features = [
    {
      title: "Vision OCR",
      description: "Advanced computer vision algorithms detect subtle inconsistencies in image metadata and pixel patterns.",
    },
    {
      title: "Visual Cues",
      description: "AI-powered analysis identifies manipulation artifacts like unnatural lighting, shadows, and facial distortions.",
    },
    {
      title: "LLM Reasoning",
      description: "Large language models provide contextual analysis and confidence scoring for comprehensive detection.",
    },
  ];

  return (
    <div className="min-vh-100 bg-dark text-light">
      {/* Hero Section */}
      <section className="py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold mb-3">
            Spot Fake Images
          </h1>
          <h2 className="display-5 text-info mb-4">
            in Seconds
          </h2>
          <p className="lead mb-4">
            Protect your organization from deepfakes and manipulated media with our cutting-edge 
            Computer Vision + LLM technology. Real-time detection, enterprise-grade security.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Button
              size="lg"
              className="btn btn-primary"
              as="a"
              href="https://inspector.forgelens.ai"
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
            Powered by <span className="text-primary">Advanced AI</span>
          </h2>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 text-dark shadow-sm">
                  <Card.Body>
                    {/* Replace with your icons if available */}
                    <div className="mb-3 p-3 bg-primary bg-opacity-10 rounded">
                      {/* Icon placeholder */}
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

      {/* Demo Section */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="mb-4">
            See ForgeLens <span className="text-primary">in Action</span>
          </h2>
          <div className="mb-3">
            {/* <BeforeAfterSlider
              beforeImage={deepfakeComparison}
              afterImage={deepfakeComparison}
              beforeLabel="Original Image"
              afterLabel="Detected Manipulation"
            /> */}
             <img src={deepfakeComparison} alt="Before" width={300} />
          </div>
          <p>
            Drag the slider to reveal how ForgeLens detects manipulation artifacts and suspicious regions
          </p>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="mb-3">Ready to Secure Your Organization?</h2>
          <p className="lead mb-4">
            Join leading enterprises in the fight against deepfakes and media manipulation.
          </p>
          <Button size="lg" className="btn btn-primary" as={Link} to="/contact">
            Get Started Today <i className="bi bi-arrow-right"></i>
          </Button>
        </Container>
      </section>
    </div>
  );
};
export default Home;