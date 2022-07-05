import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Nibus</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Celulares</Nav.Link>
                <Nav.Link href="#pricing">Tablets</Nav.Link>
            </Nav>
            <CartWidget/>
        </Container>
    </Navbar>
    </>
  )
}

export default NavBar