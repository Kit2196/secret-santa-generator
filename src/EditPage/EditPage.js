import React, { useState, useRef, useEffect } from "react";
import "./EditPage.css";
import { Container, Overlay, Tooltip } from "react-bootstrap";
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { SantaInput } from "./SantaInput";
import { PAGE, theme, ERROR_MSG_DURATION } from "../constants";
import { Button, ThemeProvider } from "@mui/material";
import { SantaGenerator } from "../SantaGenerator";

export function EditPage(props) {
  const [santas, setSantas] = useState(props.santas);
  const [giftable, setGiftable] = useState(props.giftable);

  const [error, setError] = useState(false);
  const refConfirmBtn = useRef(null);

  // Name validation Error
  const ERROR_EMPTY = "Name cannot be empty.";
  const ERROR_DUPLICATE = "Name has been entered.";

  // Santa list validation Error
  const ERROR_NOT_ENOUGHT_CANDIDATE = "Please enter at least 2 names.";

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, ERROR_MSG_DURATION);
    }
  }, [error]);

  // Button handles
  const handleBack = () => {
    props.toPage(PAGE.START);
  };

  const handleConfirm = () => {
    const error = validateSantaList();
    setError(error);
    if (!error) {
      props.updateGenerator(santas, giftable);
      props.toPage(PAGE.RESULT);
    }
  };

  const addSanta = (newSanta) => {
    setSantas((prev) => [...prev, newSanta]);
    setGiftable(SantaGenerator.expandGiftable(giftable));
  };

  const editSanta = (index, newProfile) => {
    let newSantaList = [...santas];
    newSantaList[index] = newProfile;
    setSantas(newSantaList);
  };

  const removeSanta = (index) => {
    let newSantaList = [...santas];
    newSantaList.splice(index, 1);
    setSantas(newSantaList);
    setGiftable(SantaGenerator.shrinkGiftable(giftable, index));
  };

  // Validations return error message if invalid or, otherwise, null
  const validateName = (name, currentIndex) => {
    if (name === "") {
      return ERROR_EMPTY;
    }

    for (let i = 0; i < santas.length; i++) {
      if (santas[i].name === name) {
        if (i === currentIndex) {
          break;
        }
        return ERROR_DUPLICATE;
      }
    }

    return null;
  };

  const validateSantaList = () => {
    return santas.length < 2 ? ERROR_NOT_ENOUGHT_CANDIDATE : null;
  };

  return (
    <Container className="EditPage" fluid>
      <SantaInput addSanta={addSanta} validateName={validateName} />
      <SantaTable
        santas={santas}
        giftable={giftable}
        editSanta={editSanta}
        removeSanta={removeSanta}
        validateName={validateName}
      />
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
        <Overlay
          target={refConfirmBtn.current}
          show={error}
          placement="top"
          transition={false}
        >
          <Tooltip>{error}</Tooltip>
        </Overlay>
      </div>
    </Container>
  );
}
