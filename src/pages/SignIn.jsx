import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { X, LogIn, UserPlus, Eye } from "lucide-react";
import { useToast } from '../context/ToastContext';

function SignIn() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });
  
  const [showRegisterPanel, setShowRegisterPanel] = useState(false);
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Login successful!");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!registerData.name || !registerData.email || !registerData.username || !registerData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Pre-fill login form and hide panel
    setLoginData({
      username: registerData.username,
      password: registerData.password
    });
    
    setShowRegisterPanel(false);
    toast.success("Account created successfully!");

    // Reset register form
    setRegisterData({ name: "", email: "", username: "", password: "" });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister(e);
    }
  };

  return (
    <div className="min-vh-100 py-5 position-relative overflow-hidden">
      <Container className="py-5" style={{ maxWidth: '500px' }}>
        {/* Header */}
        <div className="text-center mb-4">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <Eye className="text-primary" size={40} style={{ filter: 'drop-shadow(0 0 10px rgba(13, 110, 253, 0.5))' }} />
          </div>
          <h1 className="display-5 fw-bold mb-2">
            Welcome to <span className="text-primary">ForgeLens</span>
          </h1>
          <p className="text-muted">
            Sign in to access your deepfake detection dashboard
          </p>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg bg-dark bg-opacity-10 border">
          <Card.Body className="p-4">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="bg-light border"
                  placeholder="Enter your username"
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="bg-light border"
                  placeholder="Enter your password"
                />
              </Form.Group>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-100"
              >
                <LogIn className="me-2" size={20} />
                Sign In
              </Button>
            </Form>
            
            <div className="mt-4 text-center">
              <p className="text-muted mb-3">Don't have an account?</p>
              <Button
                onClick={() => setShowRegisterPanel(true)}
                variant="outline-primary"
                className="w-100"
              >
                <UserPlus className="me-2" size={20} />
                Create Account
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>

      {/* Register Side Panel using Offcanvas */}
      <Offcanvas 
        show={showRegisterPanel} 
        onHide={() => setShowRegisterPanel(false)}
        placement="end"
        backdrop={true}
        scroll={false}
        style={{ width: '100%', maxWidth: '500px' }}
      >
        <Offcanvas.Header closeButton className="bg-dark bg-opacity-10 border-bottom">
          <Offcanvas.Title className="fw-bold">Create Account</Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="bg-dark bg-opacity-10">
          {/* Register Form */}
          <Form onSubmit={handleRegister} onKeyPress={handleKeyPress}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                className="bg-light border"
                placeholder="Your full name"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                className="bg-light border"
                placeholder="your.email@company.com"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                className="bg-light border"
                placeholder="Choose a username"
              />
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                className="bg-light border"
                placeholder="Create a secure password"
              />
            </Form.Group>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-100"
            >
              <UserPlus className="me-2" size={20} />
              Create Account
            </Button>
          </Form>
          
          <p className="text-muted small mt-4 text-center">
            Press Enter or click the button to create your account
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SignIn;