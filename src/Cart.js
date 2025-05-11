import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

export const Cart = ({ cartItems, updateQuantity }) => {
  return (
    <>
      <h3 className="mt-5">Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <Row className="align-items-center">
                <Col>{item.title}</Col>
                <Col xs="auto" className="d-flex align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    –
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => updateQuantity(item.id, +1)}
                  >
                    +
                  </Button>
                </Col>
                <Col>= ₹{item.quantity * item.price}</Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

