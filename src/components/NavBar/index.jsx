"use client"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function NavBar() {
  const getIconColor = () => {
    return '#8064a2';
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand className='logo' href="#"><img src={"/HobbyCueLogo.png"} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex searcharea">
              <Form.Control
                type="search"
                placeholder="Search here"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success searchbtn"><i className="bi bi-search"></i></Button>
            </Form>
            <div className={`icons ${window.innerWidth <= 576 ? 'justify-content-start' : ''}`}>
              <Nav.Link className="home" href="#action1"><i className="bi bi-compass-fill text" style={{ color: getIconColor() }}></i></Nav.Link>
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">People - Community</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Places - Venues</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Programs - Events</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Products - Store</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Blogs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="home" href="#action1"><i className="bi bi-star-fill" style={{ color: getIconColor() }}></i></Nav.Link>
              <NavDropdown title="Hobbies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="home" href="#action1"><i className="bi bi-bookmark-fill" style={{ color: getIconColor() }}></i></Nav.Link>
              <Nav.Link href="#action2"><i className="bi bi-bell-fill" style={{ color: getIconColor() }}></i></Nav.Link>
            </div>
          </Nav>
          <Button variant="outline-success signinbtn">Sign in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
