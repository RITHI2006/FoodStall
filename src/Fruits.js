import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Cart from './Cart';

export const Fruits = () => {
  const FruitsItems = [
    {
      id: 14,
      image: '/images/Fruits/fruit1.jpg',
      title: 'Jack Fruit',
      description: 'half kg.',
      price: 80 ,
    },
    {
      id: 15,
      image: '/images/fruits/fruit2.jpg',
      title: 'Papaya',
      description: '1kg.',
      price: 30 ,
    },
    {
      id: 16,
      image: '/images/Fruits/fruit3.jpg',
      title: 'Star Fruit',
      description: 'half kg.',
      price: 120 ,
    },
    {
      id: 17,
      image: '/images/Fruits/fruit4.jpg',
      title: 'Banana',
      description: '12 piece.',
      price: 50 ,
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
        {FruitsItems.map((item) => (
          <Col md={3} sm={6} xs={12} key={item.id} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={item.image} alt={item.title} className="h-50" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><b>Price</b> : ₹{item.price}</Card.Text>
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
