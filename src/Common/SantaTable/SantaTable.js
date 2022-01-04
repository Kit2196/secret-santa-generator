import React from "react";
import './SantaTable.css';
import { SantaCard } from "./SantaCard";
import { CardGroup, Col, Container, Row } from "react-bootstrap";

export function SantaTable(props) {
    const generateSantaCards = () => {
        if ( props.santas.length > 0 ) {
            return (
                <Row xs={2} sm={4} md={5}>
                    { props.santas.map( (santa) => (
                        <Col>
                            <SantaCard 
                                santa={santa} 
                                showResult={props.showResult} 
                                removeSanta={props.removeSanta}
                                assigned={props.assignedVisible ? props.santas[santa.assigned] : null }
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
        <Container className='SantaTable' fluid >
            { generateSantaCards() }
        </Container>
    );
}