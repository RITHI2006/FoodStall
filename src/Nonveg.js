import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Cart from './Cart';

export const Nonveg = () => {
  const nonvegItems = [
    {
      id: 5,
      image: '/images/nonveg/nonveg1.jpg',
      title: 'Chicken 65',
      description: '2 piece.',
      price: 200
    },
    {
      id: 6,
      image: '/images/nonveg/nonveg2.jpg',
      title: 'Chicken Briyani',
      description: 'one set.',
      price: 90
    },
    {
      id: 7,
      image: '/images/nonveg/nonveg3.jpg',
      title: 'Fish Fry',
      description: 'two piece.',
      price: 60
    },
    {
      id: 8,
      image: '/images/nonveg/nonveg4.jpg',
      title: 'Chicken Gravy',
      description: 'one plate.',
      price: 80
    },
  ];

  // ✅ Load cart from localStorage on first render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save to localStorage whenever cart updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <Container className="mt-4">
      <Row>
        {nonvegItems.map((item) => (
          <Col md={3} sm={6} xs={12} key={item.id} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={item.image} alt={item.title} className="h-50" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Price : ₹{item.price}</Card.Text>
                <Button variant="primary" className="mt-auto" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
