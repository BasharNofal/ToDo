import React from 'react';
import Login from './login';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link style={{float:"left"}} href="#home">Home</Nav.Link>
      </Nav>
        <Login />
    </Navbar>
  );
}