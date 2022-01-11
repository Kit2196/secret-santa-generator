import React, { useEffect } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

const cleanErrorTimer = 2000;

export function ErrorOverlay(props) {
  const [errorMsg, setErrorMsg] = props.error;

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => setErrorMsg(false), cleanErrorTimer);
    }
  }, [errorMsg]);

  return (
    <Overlay target={props.target} show={errorMsg} placement="top">
      <Tooltip>{errorMsg}</Tooltip>
    </Overlay>
  );
}
