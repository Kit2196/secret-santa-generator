import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
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
                <p className="App-Name">Secret Santa Generator</p>
                <Button variant="outline-dark" onClick={props.onStart}>Start</Button>
            </div>
        </div>
    );
}