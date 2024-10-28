import React, { useContext } from "react";
import { context } from "..";
// import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { observer } from 'mobx-react-lite';
import DeviceItem from "./DeviceItem";

const ItemList = observer(() => {

  const {item} = useContext(context)

  return (
    <Row className="d-flex">
      {item.items.map(item =>
        <DeviceItem key={item.id} item={item}/>
        // <Col >
        //   <Card
        //     style={{ cursor: "pointer" }}
        //     onClick={() => item.setSelectedBrand(item)}
        //     className="text-center"
        //     border={item.id === item.selectedBrand.id ? 'danger' : 'light'}
        //   >
        //     {item.title}
        //   </Card>
        // </Col>
      )}
    </Row>
  );
})

export default ItemList;
