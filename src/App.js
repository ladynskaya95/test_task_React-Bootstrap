import React, { useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import "./scss/App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img from "./img/bcgr.png";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";

import AppContext from "./AppContext";

function App() {
  const [show, setShow] = useState(false);

  return (
    <AppContext.Provider value={{ show, setShow }}>
      <Container className="App container ">
        <Row className="row justify-content-md-center">
          <Col xs={12} md={5} className="leftside">
            <Image id="img" src={img} fluid></Image>
          </Col>
          <Col xs={12} md={7} className="rightside">
            <Header />
            <ModalForm />
            <Content />
            <Footer />
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
