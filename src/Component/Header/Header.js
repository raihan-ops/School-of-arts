import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-regular-svg-icons'
import {faSchool} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand ><FontAwesomeIcon  className="ms-1 me-1" icon={faSchool}/> School of Arts</Navbar.Brand>
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