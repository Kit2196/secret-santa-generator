import React from "react";
import { Card, CloseButton } from "react-bootstrap";

export function SantaCard(props) {
    const handleShowResult = () => {
        props.showResult(props.santa);
    }

    const handleRemove = () => {
        props.removeSanta(props.santa.id);
    };

    return (
        <Card className="SantaCard" onClick={props.showResult? handleShowResult : null}>
            <Card.Body>
                { props.removeSanta && <CloseButton className="right" onClick={handleRemove} /> }
                <Card.Title>{props.santa.name}</Card.Title>
                { props.assigned && <Card.Text>Assigned to {props.assigned.name}</Card.Text> }
            </Card.Body>
        </Card>
    );
}