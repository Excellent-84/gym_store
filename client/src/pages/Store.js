import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ItemList from "../components/ItemList";

const Shop = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>

        <Col md={9}>
          <BrandBar/>
          <ItemList/>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
