import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form logic
    alert(`Login with:\nEmail: ${Email}\nPassword: ${Password}`);
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row>
        <Col>
          <Card className="p-4 shadow" style={{ width: '22rem' }}>
            <h4 className="text-center mb-4">Login</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email"
                  value={Email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Enter password"
                  value={Password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </Form.Group>

              <div className="d-grid">
             
                        <Button variant="success" onClick={() => navigate('/')}>
                     Login
                    </Button>
                     
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
