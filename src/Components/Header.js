import React, { Component } from 'react';
import { Container, FormControl, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo192.png';

export default class Header extends Component {
    render() {
        return (
            <Navbar fixed='top' collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About us</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className='me-sm-2'
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}