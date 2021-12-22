import React from "react";
import {Card,Button} from 'react-bootstrap'

function CardComponent(props) {
  return (
    <Card>
      <Card.Header>User Id : {props.id}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
