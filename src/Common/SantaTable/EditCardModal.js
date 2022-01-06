import React, { useState, useRef } from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { Modal } from "react-bootstrap";
import { theme } from "../../constants";
import { ErrorOverlay } from "../ErrorOverlay";

export function EditCardModal(props) {
  const [name, setName] = useState(props.santa.name);
  const [errorMsg, setErrorMsg] = useState(false);
  const refConfirmBtn = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const error = props.validateName(name, false);
    setErrorMsg(error);

    if (!error) {
      let newProfile = props.santa;
      newProfile.name = name;

      props.editSanta(props.santa.id, newProfile);
      props.onHide();
    }
  };

  return (
    <Modal {...props} className="EditCard" size="lg" centered>
      <Modal.Header>
        <Modal.Title>Edit Santa Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField label="Name" value={name} onChange={handleNameChange} />
      </Modal.Body>
      <Modal.Footer>
        <ThemeProvider theme={theme}>
          <Button color="black" variant="outlined" onClick={props.onHide}>
            Cancel
          </Button>
          <Button
            ref={refConfirmBtn}
            color="black"
            variant="outlined"
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </ThemeProvider>
        <ErrorOverlay
          target={refConfirmBtn.current}
          error={[errorMsg, setErrorMsg]}
        />
      </Modal.Footer>
    </Modal>
  );
}
