import React, { useEffect, useState } from "react";
import './ResultPage.css';
import { Button, Container } from "react-bootstrap";
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { CustomModal } from "../Common/CustomModal";
import { PAGE } from "../constants";

export function ResultPage(props) {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const [assignedVisible, setAssignedVisibility] = useState(false);

    // Assign recipient once when the page is loaded
    useEffect(() => {
        props.assignRecipients();
    }, []);

    const handleBack = () => {
        props.toPage(PAGE.EDIT);
    }

    const handleShuffle = () => {
        props.assignRecipients();
    }

    const handleShow = () => {
        setAssignedVisibility(!assignedVisible);
    };

    const handleFinish = () => {
        props.toPage(PAGE.START);
    };

    const showResult = (santa) => {
        // find recipient by array index
        const recipient = props.santas[santa.assigned];

        setModalTitle(<p>{santa.name}</p>);
        setModalContent(
            <p>Your recipient is <strong>{recipient.name}</strong>!</p>
        );
        setShowModal(true);
    }

    return (
        <Container className='ResultPage' fluid>
            <SantaTable santas={props.santas} showResult={showResult} assignedVisible={assignedVisible}/>
            <p className="result-note">*You can click on each box to check the recipient for a specific santa.</p>
            <div className='ButtonBar'>
                <Button variant="outline-dark" onClick={handleBack}>Back</Button>
                <Button variant="outline-dark" onClick={handleShuffle}>Reshuffle!</Button>
                <Button variant="outline-dark" onClick={handleShow}>Show All!</Button>
                <Button variant="outline-dark" onClick={handleFinish}>Finished</Button>
            </div>
            <CustomModal 
                show={showModal}
                onHide={() => setShowModal(false)}
                title={modalTitle}
                content={modalContent}
            />
        </Container>
    );
}