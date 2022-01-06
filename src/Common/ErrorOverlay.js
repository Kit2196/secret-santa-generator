import React, { useEffect } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

const cleanErrorTimer = 2000;

export function ErrorOverlay(props) {
  const [errorMsg, setErrorMsg] = props.error;

  useEffect(() => {
    const cleanErrorMsg = setInterval(
      () => setErrorMsg(false),
      cleanErrorTimer
    );
    return () => clearInterval(cleanErrorMsg);
  }, [errorMsg]);

  return (
    <Overlay target={props.target} show={errorMsg} placement="top">
      <Tooltip>{errorMsg}</Tooltip>
    </Overlay>
  );
}
