import React, { useEffect, useState } from 'react';
import { Cart } from './Cart';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';



export const CartPage = () => {
    const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const updateQuantity = (itemId, delta) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <Container className="mt-4">
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
      <Row className="mt-4">
        <Col className="text-end">
          <h4>Total: ₹{total}</h4>
        </Col>
        </Row>
        <Row>
        <Col className="text">
        <Button variant="success" onClick={() => navigate('/order')}>
     Order Now
    </Button>
        </Col>
        </Row>
      

    </Container>
  );
};
