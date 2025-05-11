import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          {/* Feedback Form */}
          <Col md={6} className="mb-4">
            <h5 className="mb-3">Feedback</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formQuery">
                <Form.Label>Query</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your query" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>

          {/* Navigation Links */}
          <Col md={6}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Order</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
