import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";

import "./scss/App.scss";

import img from "./img/bcgr.png";
import logo from "./img/logo.png";

function App() {
    return (
      <Container className="App container ">
        <Row className="row justify-content-md-center">
          <Col xs={12} md={5} className="leftside">
            <Image id="img" src={img} fluid></Image>
            <Image id="logo" src={logo} fluid></Image>
          </Col>
          <Col xs={12} md={7} className="rightside">
            <div className="d-flex ev">
              <Header />
              <ModalForm />
            </div>
            <Content />
            <Footer />
          </Col>
        </Row>
      </Container>
    );
}

export default App;
