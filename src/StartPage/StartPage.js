import React, { useEffect } from "react";
import { logo } from "../constants";
import "./StartPage.css";

export function StartPage(props) {
    // Reset santas, when the start screen is loaded
    useEffect(() => {
        props.removeAllSantas();
    }, []);

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