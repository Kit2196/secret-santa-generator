import React from "react";
import "./Start.css";

export function Start(props) {
    return (
        <div className='Start'>
            <img src={props.logo} alt="logo" />
            <div>
                <p>Secret Santa Generator</p>
                <button onClick={props.onClick}>Start</button>
            </div>
        </div>
    );
}