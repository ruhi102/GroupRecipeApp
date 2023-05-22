import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function User() {
  const location = useLocation();
  const backgroundImage = "https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/37/376/376337/ygpwljayrhob6lyeag3dcfg2sijnxuk3nw5gvnrqeb9bnz0z8jdpxs00bbsagg97-o.jpg?1424951984";
  
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set a minimum height to cover the entire viewport
    display: 'flex', // Add flex display for centering content
    flexDirection: 'column', // Align content vertically
  };

  return (
    <div style={containerStyle}>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Navbar bg="blue" expand="lg" fixed="top" style={{ backgroundColor: "#FADCD9" }}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/"><b>Rec🍴pe</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end">
                <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default User;
