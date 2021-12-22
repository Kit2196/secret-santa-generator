import React, { useEffect, useState } from "react";
import './ResultPage.css';
import { Button } from "react-bootstrap";
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { Overlay } from "../Common/Overlay";
import { PAGE } from "../constants";

export function ResultPage(props) {
    const [overlayContent, setOverlayContent] = useState(null);
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

        setOverlayContent(<div className="Overlay-Result">
            <p>{santa.name},</p>
            <p>You are assigned to <strong>{recipient.name}</strong></p>
        </div>);
    }

    return (
        <div className='SantaResult'>
            <SantaTable santas={props.santas} showResult={showResult} assignedVisible={assignedVisible}/>
            <div className='ButtonBar'>
                <Button variant="outline-dark" onClick={handleBack}>Back</Button>
                <Button variant="outline-dark" onClick={handleShuffle}>Reshuffle!</Button>
                <Button variant="outline-dark" onClick={handleShow}>Show All!</Button>
                <Button variant="outline-dark" onClick={handleFinish}>Finished</Button>
            </div>
            {overlayContent && <Overlay content={overlayContent} disableOverlay={() => setOverlayContent(null)}/>}
        </div>
    );
}