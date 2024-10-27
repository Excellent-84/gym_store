import React, { useContext } from "react";
import { context } from "..";
import ListGroup from 'react-bootstrap/ListGroup'
import { observer } from 'mobx-react-lite';

const TypeBar = observer(() => {

  const {item} = useContext(context)

  return (
    <ListGroup>
      {item.types.map(type =>
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === item.selectedType.id}
          onClick={() => item.setSelectedType(type)}
          key={type.id}
        >
          {type.title}
        </ListGroup.Item>
      )}
    </ListGroup>
  );
})

export default TypeBar;
