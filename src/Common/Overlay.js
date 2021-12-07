import React from "react";
import "./Overlay.css";

export function Overlay(props) {
    return (
        <div className="Overlay">
            <div className="Overlay-Container">
                <button className='Overlay-Close-Btn' onClick={props.disableOverlay} >✖</button>
                { props.content }
            </div>
            <div className="Overlay-Greyscreen" onClick={props.disableOverlay}> </div>
        </div>
    );
}