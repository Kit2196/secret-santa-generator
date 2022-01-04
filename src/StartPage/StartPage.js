import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { logo } from "../constants";
import "./StartPage.css";

export function StartPage(props) {
    // Reset santas, when the start screen is loaded
    useEffect(() => {
        props.removeAllSantas();
    }, []);

    return (
        <Container className='StartPage'>
            <Container>
                <img src={logo} alt="logo" />
                <div>
                    <p className="App-Name">Secret Santa Generator</p>
                    <Button variant="outline-dark" onClick={props.onStart}>Start</Button>
                </div>
            </Container>
        </Container>
    );
}