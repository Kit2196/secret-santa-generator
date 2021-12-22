import React from "react";
import './SantaTable.css';
import { SantaCard } from "./SantaCard";
import { Col, Container, Row } from "react-bootstrap";

export function SantaTable(props) {
    if ( props.santas.length > 0 ) {
        return (
            <Container className='SantaTable' fluid >
                <Row>
                    { props.santas.map( (santa) => (
                        <Col><SantaCard 
                            santa={santa} 
                            showResult={props.showResult} 
                            removeSanta={props.removeSanta}
                            assigned={props.assignedVisible ? props.santas[santa.assigned] : null }
                        /></Col>
                        
                    ))}
                </Row>
            </Container>
        );
    } else {
        return (<p>There are no santa yet...</p>);
    }
}