import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const items = [
  { name: "Home", key: 1 },
  { name: "Transport", key: 2 },
  { name: "Bus Stop", key: 3 },
  { name: "Route", key: 4 },
  { name: "About us", key: 5 },
];

function Header () {
 
    return (
      <Navbar collapseOnSelect>
        <Container fluid className="header">
          <Navbar.Collapse
            className="justify-content-around"
            id="responsive-navbar-nav">
            <Nav className="justify-align-content-lg-between" activeKey="/home">
              {items.map((item) => (
                <Nav.Item eventKey={item.key}>
                  <Nav.Link>{item.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;
