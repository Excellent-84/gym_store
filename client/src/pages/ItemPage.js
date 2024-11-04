import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const ItemPage = () => {

  const item = {id: 1, title: 'Обруч 90 см', price: 1200, image: ''};
  const description = [
    {id: 1, title: 'Размер', description: '90 см'},
    {id: 2, title: 'Цвет', description: 'белый'},
  ]

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <Image width={300} height={300} src={item.image}/>
            <h2>{item.title}</h2>
          </Row>
        </Col>
        <Col md={4}>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 150, fontSize: 32, border: "5px solid lightgray" }}
          >
            <h3>{item.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <h1>Характеристики</h1>
        {description.map((info, index) =>
          <Row
            key={info.id}
            style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
          >
            {info.title}: {info.description}
          </Row>
      )}</Row>
    </Container>
  );
}

export default ItemPage;
