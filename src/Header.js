import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Tasty Treats To Eat</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/variety">Varieties</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/Cartpage">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
