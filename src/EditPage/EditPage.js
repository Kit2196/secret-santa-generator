import React, { useState, useRef, useEffect } from "react";
import './EditPage.css';
import { Button, Container, Overlay, Tooltip } from "react-bootstrap";
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { SantaInput } from "./SantaInput";
import { PAGE } from "../constants";

export function EditPage(props){
    const cleanErrorTimer = 5000;

    const [errorMsg, setErrorMsg] = useState(false);

    const refConfirmBtn = useRef(null);

    const ERROR_NOT_ENOUGHT_CANDIDATE = "Please enter at least 2 names.";
    
    useEffect(() => {
        const cleanErrorMsg = setInterval(() => (
          setErrorMsg(false)
        ), cleanErrorTimer);
        return () => clearInterval(cleanErrorMsg); 
    }, [errorMsg]);

    const handleConfirm = () => {
        if(validateSantaList()) {
            props.toPage(PAGE.RESULT);
        }
    };

    const handleBack = () => {
        props.toPage(PAGE.START);
    }
    
    const validateSantaList = () => {
        if (props.santas.length < 2) {
            setErrorMsg(ERROR_NOT_ENOUGHT_CANDIDATE);
            return false;
        } else {
            return true;
        }
    }

    return (
        <Container className='EditPage' fluid>
            <SantaInput {...props}/>
            <SantaTable {...props}/>
            <div className='ButtonBar'>
                <Button variant="outline-dark" onClick={handleBack}>Back</Button>
                <Button ref={refConfirmBtn} variant="outline-dark" onClick={handleConfirm}>Confirm</Button>
                <Overlay target={refConfirmBtn.current} show={errorMsg} placement="bottom">
                    <Tooltip>{errorMsg}</Tooltip>
                </Overlay>
            </div>
        </Container>
    );
}

