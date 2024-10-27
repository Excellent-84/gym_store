import React, { useContext } from "react";
import { context } from "..";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import { observer } from 'mobx-react-lite';

const BrandBar = observer(() => {

  const {item} = useContext(context)

  return (
    <Row className="d-flex">
      {item.brands.map(brand =>
        <Card
          key={brand.id}
          style={{ cursor: "pointer" }}
          onClick={() => item.setSelectedBrand(brand)}
          className="p-2"
          border={brand.id === item.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.title}
        </Card>
      )}
    </Row>
  );
})

export default BrandBar;
