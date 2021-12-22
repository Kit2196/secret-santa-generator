import React from "react";
import { Navbar, Container } from "react-bootstrap";
import './Header.css';
import { logo } from "../constants";

export function Header(props) {
    return (
        <Navbar className="Header" fixed="top">
            <img src={logo} alt="logo" className="logo" />
            <p className="App-Name">Secret Santa Generator</p>
        </Navbar>
    );
}