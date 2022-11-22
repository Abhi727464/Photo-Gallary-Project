import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarComponent = ({setPage}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
      <img
              alt=""
              src="https://www.pngkey.com/png/full/50-505541_this-free-icons-png-design-of-gallery-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        React-Bootstrap
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>  
        </Nav>
        <Nav>
        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent