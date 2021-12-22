import React from "react";
import { CloseButton } from "react-bootstrap";
import "./Overlay.css";

export function Overlay(props) {
    return (
        <div className="Overlay">
            <div className="Overlay-Container">
                <CloseButton className='Overlay-Close-Btn' onClick={props.disableOverlay} />
                { props.content }
            </div>
            <div className="Overlay-Greyscreen" onClick={props.disableOverlay}> </div>
        </div>
    );
}