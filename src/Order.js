import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Toast } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Order = () => {
  const [Name, setName] = useState('');
  const [Department, setDepartment] = useState('');
  const [Class, setClass] = useState('');
  const [Time, setTime] = useState('');
  const [Date, setDate] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Order Summary', 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${Name}`, 10, 20);
    doc.text(`Department: ${Department}`, 10, 30);
    doc.text(`Class: ${Class}`, 10, 40);
    doc.text(`Date: ${Date}`, 10, 50);
    doc.text(`Time: ${Time}`, 10, 60);

    let y = 70;
    doc.text('Items:', 10, y);
    cartItems.forEach((item, index) => {
      y += 10;
      doc.text(`${index + 1}. ${item.title} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`, 10, y);
    });

    y += 15;
    doc.setFontSize(14);
    doc.text(`Total: ₹${getTotal()}`, 10, y);

    doc.save('order-summary.pdf');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    generatePDF();
    localStorage.removeItem('cart');
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row>
        <Col>
          <Card className="p-4 shadow" style={{ width: '22rem' }}>
            <h4 className="text-center mb-4">Order</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Department"
                  value={Department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formClass">
                <Form.Label>Class</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Class"
                  value={Class}
                  onChange={(e) => setClass(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  value={Time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="danger" type="submit">
                  Order
                </Button>
              </div>
            </Form>
          </Card>

          {/* Toast for success message */}
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
            bg="success"
            className="position-absolute top-0 end-0 m-4"
          >
            <Toast.Header>
              <strong className="me-auto">Order Submitted</strong>
            </Toast.Header>
            <Toast.Body className="text-white">
              Your order has been submitted successfully!
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
