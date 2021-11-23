import React from "react";
import { logo } from "../constants";
import "./StartPage.css";

export function StartPage(props) {
    return (
        <div className='Start'>
            <img src={logo} alt="logo" />
            <div>
                <p>Secret Santa Generator</p>
                <button onClick={props.onStart}>Start</button>
            </div>
        </div>
    );
}