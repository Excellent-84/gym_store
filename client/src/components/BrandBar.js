import React, { useContext } from "react";
import { context } from "..";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from 'mobx-react-lite';

const BrandBar = observer(() => {

  const {item} = useContext(context)

  return (
    <Row className="d-flex">
      {item.brands.map(brand =>
        <Col key={brand.id} className="p-2">
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => item.setSelectedBrand(brand)}
            className="text-center"
            border={brand.id === item.selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.title}
          </Card>
        </Col>
      )}
    </Row>
  );
})

export default BrandBar;
