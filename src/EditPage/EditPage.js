import React, { useState, useRef } from "react";
import "./EditPage.css";
import { Container } from "react-bootstrap";
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { SantaInput } from "./SantaInput";
import { PAGE, theme } from "../constants";
import { ErrorOverlay } from "../Common/ErrorOverlay";
import { Button, ThemeProvider } from "@mui/material";

export function EditPage(props) {
  const [errorMsg, setErrorMsg] = useState(false);
  const refConfirmBtn = useRef(null);

  // Name validation Error
  const ERROR_EMPTY = "Name cannot be empty.";
  const ERROR_DUPLICATE = "Name has been entered.";

  // Santa list validation Error
  const ERROR_NOT_ENOUGHT_CANDIDATE = "Please enter at least 2 names.";

  // Button handles
  const handleBack = () => {
    props.toPage(PAGE.START);
  };

  const handleConfirm = () => {
    const error = validateSantaList();
    setErrorMsg(error);
    if (!error) {
      props.toPage(PAGE.RESULT);
    }
  };

  // Validations return error message if invalid or, otherwise, null
  const validateName = (name, checkDuplication) => {
    if (name === "") {
      return ERROR_EMPTY;
    }

    if (checkDuplication) {
      for (let i = 0; i < props.santas.length; i++) {
        if (props.santas[i].name === name) {
          return ERROR_DUPLICATE;
        }
      }
    }

    return null;
  };

  const validateSantaList = () => {
    if (props.santas.length < 2) {
      return ERROR_NOT_ENOUGHT_CANDIDATE;
    } else {
      return null;
    }
  };

  return (
    <Container className="EditPage" fluid>
      <SantaInput {...props} validateName={validateName} />
      <SantaTable {...props} validateName={validateName} />
      <div className="ButtonBar">
        <ThemeProvider theme={theme}>
          <Button color="black" variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button
            ref={refConfirmBtn}
            color="black"
            variant="outlined"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </ThemeProvider>
        <ErrorOverlay
          target={refConfirmBtn.current}
          error={[errorMsg, setErrorMsg]}
        />
      </div>
    </Container>
  );
}
