import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GreenCare from '../assets/images/bg-testimonial.jpg';
import '../App.css';

export default function AppHeader(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
        <div>
      <img src={GreenCare} alt="Green Care" />
    </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#Announcements">Annoucements</Nav.Link>
              <Nav.Link href="#AboutUs">About us</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}