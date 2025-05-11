import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: '28rem' }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Contact Us</Card.Title>
          <Card.Text>
            <strong>Mobile:</strong> 1236547899<br />
            <strong>Email:</strong> foodstall@gmail.com<br />
            <strong>Address:</strong><br />
            FoodStall,<br />
            Nehru Street,<br />
            Perundurai - 638455
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;
