import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav1() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/logout' &&
        location.pathname !== '/login' &&
        location.pathname !== '/register' &&
        location.pathname !== '/' && (
          <Navbar bg="blue" expand="lg" fixed="top" style={{ backgroundColor: "#FADCD9" }}>
            <Container fluid>
              <Navbar.Brand href="#home"> <b>Rec🍴pe</b></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myrecipe">
                    Create Recipes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/saverecipe">
                    My Recipes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/logout">
                    Logout
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
    </div>
  );
}

export default Nav1;
