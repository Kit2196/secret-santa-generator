import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { logo, theme } from "../constants";
import "./StartPage.css";

export function StartPage(props) {
  return (
    <Container className="StartPage">
      <Container>
        <img src={logo} alt="logo" />
        <div>
          <p className="App-Name">Secret Santa Generator</p>
          <ThemeProvider theme={theme}>
            <Button color="black" variant="outlined" onClick={props.onStart}>
              Start
            </Button>
          </ThemeProvider>
        </div>
      </Container>
    </Container>
  );
}
