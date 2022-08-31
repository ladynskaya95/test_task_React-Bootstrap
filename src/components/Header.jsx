import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";




function Header () {
 
    return (
      <Navbar collapseOnSelect>
        <Container fluid className="header">
          <Navbar.Collapse
            className="justify-content-around"
            id="responsive-navbar-nav"
          >
            <Nav className="justify-align-content-lg-between" activeKey="/home">
              <Nav.Item eventKey={1}>
                <Nav.Link>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item eventKey={2}>
                <Nav.Link>Transport</Nav.Link>
              </Nav.Item>
              <Nav.Item eventKey={3}>
                <Nav.Link>Bus Stop</Nav.Link>
              </Nav.Item>
              <Nav.Item eventKey={4}>
                <Nav.Link>Route</Nav.Link>
              </Nav.Item>
              <Nav.Item eventKey={5}>
                <Nav.Link>About us</Nav.Link>
              </Nav.Item>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;
