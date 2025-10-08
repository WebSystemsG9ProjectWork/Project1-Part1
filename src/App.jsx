import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ToastProvider } from './context/ToastContext';
import Container from 'react-bootstrap/Container';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import { Eye } from "lucide-react";
import './styles/gradient.css';
import { useTheme } from './context/ThemeContext';
import { Button } from "react-bootstrap";
import { Moon, Sun } from "lucide-react";
import { LoadScript } from "@react-google-maps/api";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [locationPathName, setLocationPathName] = useState(location.pathname);
  const { theme, toggleTheme } = useTheme();

  const closeNavbar = (locationPathName) =>  {
    locationPathName != "" ? setLocationPathName(locationPathName) : "";
    setExpanded(false)
  };

  return (
    <ToastProvider>
      <LoadScript googleMapsApiKey="AIzaSyB6PMPp4XyqBoe5XJVcKHILewCWy8Bwk9k">
        <Router>
          <Navbar 
            expand="lg" 
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            className={theme == 'light' ? "navbar-light-color sticky-top shadow" : "sticky-top shadow navbar navbar-expand-lg navbar-dark bg-dark"}
          >
            <Container fluid>
              <Navbar.Brand as={Link} to="/" onClick={() => closeNavbar("")} className="fw-bold">
                <div className="d-flex align-items-center justify-content-center">
                  <Eye className="text-primary" size={20} style={{ filter: 'drop-shadow(0 0 10px rgba(13, 110, 253, 0.5))', marginRight:'5px' }} />
                  <span className="text-primary">Phish</span>Lens
                </div>
              </Navbar.Brand>
              <Button
                variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className={expanded ? "p-2 theme-toggle-button set-margin-top" : "p-2 theme-toggle-button"}
                >
                {theme === "light" ? (
                  <Sun stroke="#000"/>
                ) : (
                  <Moon fill="white" />
                )}
              </Button>
              <Navbar.Toggle 
                aria-controls="navbarNav"
                onClick={() => setExpanded(!expanded)}
              />
              <Navbar.Collapse id="navbarNav">
                <Nav className="ms-auto">
                  <Nav.Link 
                    as={Link} 
                    to="/" 
                    onClick={() => closeNavbar("/")}
                    className={`${locationPathName == '/' ? 'active' : 'text-light'} ${theme == 'light' ? 'dark' : 'light'}`}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link 
                    as={Link} 
                    to="/about" 
                    onClick={() => closeNavbar("/about")}
                    className={`${locationPathName == '/about' ? 'active' : 'text-light'} ${theme == 'light' ? 'dark' : 'light'}`}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link 
                    as={Link} 
                    to="/contact" 
                    onClick={() => closeNavbar("/contact")}
                    className={`${locationPathName == '/contact' ? 'active' : 'text-light'} ${theme == 'light' ? 'dark' : 'light'}`}
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link 
                    as={Link} 
                    to="/signin" 
                    onClick={() => closeNavbar("/signin")}
                    className={`${locationPathName == '/signin' ? 'active' : 'text-light'} ${theme == 'light' ? 'dark' : 'light'}`}
                  >
                    Sign In
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Router>
      </LoadScript>
    </ToastProvider>
  );
}

export default App;