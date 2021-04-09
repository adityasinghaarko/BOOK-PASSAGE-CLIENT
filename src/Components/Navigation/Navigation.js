import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><h1>BOOK PASSAGE</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link> <Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link> <Link to="/orders">Orders</Link></Nav.Link>
                    <Nav.Link> <Link to="/admin">Admin</Link></Nav.Link>
                    <Nav.Link> <Link to="/deals">Deals</Link></Nav.Link>
                    <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;