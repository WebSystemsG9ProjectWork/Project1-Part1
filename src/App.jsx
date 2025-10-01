import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ToastProvider } from './context/ToastContext';
import Container from 'react-bootstrap/Container';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";

function App() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <ToastProvider>
      <Router>
        <Navbar 
          bg="dark" 
          variant="dark" 
          expand="lg" 
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          className="sticky-top shadow"
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/" onClick={closeNavbar} className="fw-bold">
              <span className="text-primary">Forge</span>Lens
            </Navbar.Brand>
            
            <Navbar.Toggle 
              aria-controls="navbarNav"
              onClick={() => setExpanded(!expanded)}
            />
            
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <Nav.Link 
                  as={Link} 
                  to="/" 
                  onClick={closeNavbar}
                  className="text-light"
                >
                  Home
                </Nav.Link>
                <Nav.Link 
                  as={Link} 
                  to="/about" 
                  onClick={closeNavbar}
                  className="text-light"
                >
                  About Us
                </Nav.Link>
                <Nav.Link 
                  as={Link} 
                  to="/contact" 
                  onClick={closeNavbar}
                  className="text-light"
                >
                  Contact
                </Nav.Link>
                <Nav.Link 
                  as={Link} 
                  to="/signin" 
                  onClick={closeNavbar}
                  className="text-light"
                >
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;