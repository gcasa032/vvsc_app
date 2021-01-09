import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

import '../../assets/fonts/font-awesome.min.css'
import './Navbar.css'

const navbar = () => {

    // Take in props for nav items
    // Create nav item component

    return (
        <Navbar bg='dark' expand='lg' variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto" id="mainNav">
                    <Nav.Link>
                       <Link to="about" smooth={true} spy={true}>about</Link> 
                    </Nav.Link>                
                    <Nav.Link>
                        <Link to="testimonials" smooth={true} spy={true}>testimonials</Link> 
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="gallery" smooth={true} spy={true}>gallery</Link> 
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="contact" smooth={true} spy={true}>contact</Link> 
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navbar;