/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div >
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='text-warning fw-bold'>HUNGRY HEAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">BLOGS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="warning">login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;