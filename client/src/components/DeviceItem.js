import React from "react";
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom"
import { ITEM_ROUTE } from "../utils/consts";

const DeviceItem = ({item})  => {

  const navigate = useNavigate()
  console.log(navigate)

  return (
    <Col md={3} className={"mt-3"} onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}>
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
