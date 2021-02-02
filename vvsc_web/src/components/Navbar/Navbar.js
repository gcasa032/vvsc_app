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
        <div className= "container-fluid">
            <Navbar fixed="top" bg='dark' expand='lg' variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="m-auto" id="mainNav">
                        <Link className="nav-link" to="about" smooth={true} spy={true}>about</Link>                
                        <Link className="nav-link" to="testimonials" smooth={true} spy={true}>testimonials</Link> 
                        <Link className="nav-link" to="gallery" smooth={true} spy={true}>gallery</Link> 
                        <Link className="nav-link" to="contact" smooth={true} spy={true}>contact</Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    )
}

export default navbar;