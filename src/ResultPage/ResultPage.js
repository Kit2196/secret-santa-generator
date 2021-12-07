import React, { useEffect, useState } from "react";
import './ResultPage.css';
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

    const handleShow = () => {
        setAssignedVisibility(!assignedVisible);
    };

    const handleConfirm = () => {
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
                <button onClick={handleBack}>Back</button>
                <button onClick={handleShow}>Show All!</button>
                <button onClick={handleConfirm}>Confirm</button>
            </div>
            {overlayContent && <Overlay content={overlayContent} disableOverlay={() => setOverlayContent(null)}/>}
        </div>
    );
}