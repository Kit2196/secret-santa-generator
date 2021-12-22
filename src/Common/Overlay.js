import React from "react";
import { Container, CloseButton, Card } from "react-bootstrap";
import "./Overlay.css";

export function Overlay(props) {
    return (
        <div className="Overlay">
            <Card className="Overlay-Container">
                <Card.Body>
                    <CloseButton className='right' onClick={props.disableOverlay} />
                    <Card.Text>{ props.content }</Card.Text>
                </Card.Body>
            </Card>
            <Container className="Overlay-Greyscreen" onClick={props.disableOverlay} fluid> </Container>
        </div>
    );
}