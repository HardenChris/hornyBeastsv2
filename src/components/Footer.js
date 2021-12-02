import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
            <Navbar.Brand href="#">Author: Chris Harden </Navbar.Brand>
            </Container>
            </Navbar>
        );
    }
}

export default Footer;