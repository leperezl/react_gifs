import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const MyNav = () => { 
return (
    <Navbar bg="light"  variant="light">
        <Container>
        <Navbar.Brand href="#home">Isis-3710</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#Gallery">Gallery</Nav.Link>
        <Nav.Link href="#Counter">Counter</Nav.Link>
        </Nav>
        </Container>
    </Navbar>)
}
export default MyNav 
