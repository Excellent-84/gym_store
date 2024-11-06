import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../modals/CreateBrand";
import CreateType from "../modals/CreateType";
import CreateItem from "../modals/CreateItem";

const Admin = () => {

  const [typeVisible, setTypeVisible] = useState(false)
  const [brandVisible, setBrandVisible] = useState(false)
  const [itemVisible, setItemVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        onClick={() => setTypeVisible(true)}
        className="mt-4 p-2"
      >
        Добавить тип
      </Button>
      <Button
        variant={"outline-dark"}
        onClick={() => setBrandVisible(true)}
        className="mt-4 p-2"
      >
        Добавить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        onClick={() => setItemVisible(true)}
        className="mt-4 p-2"
      >
        Добавить предмет
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>

    </Container>
  );
}

export default Admin;
