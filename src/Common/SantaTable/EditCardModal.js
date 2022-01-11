import React, { useState, useRef, useEffect } from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { Modal, Overlay, Tooltip } from "react-bootstrap";
import { ERROR_MSG_DURATION, theme } from "../../constants";

export function EditCardModal(props) {
  const [name, setName] = useState(props.santa.name);
  const [error, setError] = useState(false);
  const refConfirmBtn = useRef(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, ERROR_MSG_DURATION);
    }
  }, [error]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const error = props.validateName(name, props.index);
    setError(error);

    if (!error) {
      let newProfile = props.santa;
      newProfile.name = name;

      props.editSanta(props.index, newProfile);
      props.onHide();
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className="EditCard"
      size="lg"
      centered
    >
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
        <Overlay
          target={refConfirmBtn.current}
          show={error}
          placement="top"
          transition={false}
        >
          <Tooltip>{error}</Tooltip>
        </Overlay>
      </Modal.Footer>
    </Modal>
  );
}
