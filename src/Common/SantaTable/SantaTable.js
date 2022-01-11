import React from "react";
import "./SantaTable.css";
import { SantaCard } from "./SantaCard";
import { Col, Container, Row } from "react-bootstrap";

export function SantaTable(props) {
  const generateSantaCards = () => {
    if (props.santas.length > 0) {
      return (
        <Row xs={2} sm={3} md={4}>
          {props.santas.map((santa, index) => (
            <Col>
              <SantaCard
                {...props}
                index={index}
                santa={santa}
                assigned={
                  props.assignedVisible ? props.santas[santa.assigned] : null
                }
              />
            </Col>
          ))}
        </Row>
      );
    } else {
      return <p>There are no santa yet...</p>;
    }
  };

  return (
    <Container className="SantaTable" fluid>
      {generateSantaCards()}
    </Container>
  );
}
