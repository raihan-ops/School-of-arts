import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >School of Arts</Navbar.Brand>
                    <Nav className="">


                        <NavLink className="my-custom-link" to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Home</NavLink>

                        <NavLink className="my-custom-link" to="/services" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Services</NavLink>
                        <NavLink className="my-custom-link" to="/contact" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Contact Us</NavLink>
                        <NavLink className="my-custom-link" to="/about" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>About</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>

    );
};

export default Header;