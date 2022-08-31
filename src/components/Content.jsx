import React from 'react';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

const Content = () => {
  return (
    <Container fluid className="d-block content">
      <header>
        <h1 className="title">Enjoy a safe trip</h1>
      </header>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem atque laboriosam eius commodi minima.</p>
        <Button className="btn" href="http://google.com/">Read more</Button>
      </main>
      
    </Container>
  );
}

export default Content