import React from "react";
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const DeviceItem = ({item})  => {

  return (
    <Col md={3} className={"mt-3"}>
      <Card style={{width: 150, cursor: "pointer"}}>
        <Image width={150} height={150} src={item.immage}/>
        <div className="text-black-50 d-flex justify-content-between align-items-center">
            <div>Обруч ...</div>
        </div>
        <div>{item.title}</div>
      </Card>
    </Col>
  );
}

export default DeviceItem;