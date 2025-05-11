import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Cart from './Cart';
import { Link } from 'react-router-dom';

export const Veg = () => {
  const vegItems = [
    {
      id: 1,
      image: '/images/veg/veg1.jpg',
      title: 'Poori',
      description: '1 set poori.',
      price: 30
    },
    {
      id: 2,
      image: '/images/veg/veg2.jpg',
      title: 'Meals',
      description: 'one set.',
      price: 100
    },
    {
      id: 3,
      image: '/images/veg/veg3.jpg',
      title: 'Idly',
      description: '2 idly.',
      price: 40
    },
    {
      id: 4,
      image: '/images/veg/veg4.jpg',
      title: 'Tiffen',
      description: 'morning tiffen.',
      price: 120
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
        {vegItems.map((item) => (
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
