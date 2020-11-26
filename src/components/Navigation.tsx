import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import logo from '../assets/logo.png';
import {ICity} from "../shared/schemas/Datamodels";
import {Link} from "react-router-dom";

export interface INavigationProps {
    cities: ICity[] | undefined
}

export default function Navigation(props: INavigationProps) {
    const {cities} = props

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/"><img src={logo} width="50" height="50"
                                        className="d-inline-block align-top" alt="CarPar Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Startseite</Nav.Link>
                        <NavDropdown title="Städte" id="basic-nav-dropdown">
                            {cities?.map(city =>
                            city.showInUI ?
                                        <NavDropdown.Item key={city._id} as={Link} to={`city/${city._id}`}>{city.name}</NavDropdown.Item>
                            : <p key={city._id}/>
                            )}
                        </NavDropdown>
                    <Nav.Link as={Link} to="/about">Über uns</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
