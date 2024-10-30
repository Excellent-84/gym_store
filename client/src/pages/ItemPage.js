import React from "react";
import { Col, Container, Image } from "react-bootstrap";

const ItemPage = () => {

  const item = {id: 1, title: 'Обруч 90 см', price: 1200, image: ''};

  return (
    <Container>
      <Col md={4}>
        <Image width={300} height={300} src={item.image}/>
      </Col>
      <Col md={4}>

      </Col>
      <Col md={4}>

      </Col>
    </Container>
  );
}

export default ItemPage;
