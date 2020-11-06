import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import logo from '../assets/logo.png'; // Tell webpack this JS file uses this image

export default function Navigation() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/"><img src={logo} width="75" height="75" className="d-inline-block align-top"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Startseite</Nav.Link>
            <NavDropdown title="Städte" id="basic-nav-dropdown">
                <NavDropdown.Item href="city/lucerne">Luzern</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="/">Karte</Nav.Link>
          <Nav.Link href="/">Über uns</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
