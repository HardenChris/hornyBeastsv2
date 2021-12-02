import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Navbar sticky="top" />
                    <h1>
                        <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
                    </h1>
            </Navbar>
        );
    }
}

export default Header;