import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.css";
import { logo } from "../constants";

export function Header(props) {
  return (
    <Navbar className="Header">
      <Container className="justify-content-center" fluid>
        <img src={logo} alt="logo" className="logo" />
        <p className="App-Name">Secret Santa Generator</p>
      </Container>
    </Navbar>
  );
}
