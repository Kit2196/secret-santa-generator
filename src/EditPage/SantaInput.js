import { Button, ThemeProvider } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { Form, FormControl, Overlay, Tooltip } from "react-bootstrap";
import { theme, ERROR_MSG_DURATION } from "../constants";

export function SantaInput(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const refAddBtn = useRef(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, ERROR_MSG_DURATION);
    }
  }, [error]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const error = props.validateName(name, -1);
    setError(error);

    if (!error) {
      const newSanta = {
        name: name,
        assigned: null,
      };

      props.addSanta(newSanta);
      setName(""); // clean the textbox
    }
  };

  return (
    <Form className="SantaInput" onSubmit={handleAdd}>
      <FormControl
        value={name}
        placeholder="Enter a name here..."
        onChange={handleChange}
        maxLength={20}
      />
      <ThemeProvider theme={theme}>
        <Button
          ref={refAddBtn}
          color="black"
          variant="outlined"
          type="submit"
          value="Add"
        >
          Add
        </Button>
      </ThemeProvider>
      <Overlay
        target={refAddBtn.current}
        show={error}
        placement="top"
        transition={false}
      >
        <Tooltip>{error}</Tooltip>
      </Overlay>
    </Form>
  );
}
