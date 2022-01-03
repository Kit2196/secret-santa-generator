import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormControl, Overlay, Tooltip } from "react-bootstrap";

export function SantaInput(props) {
    const cleanErrorTimer = 5000;

    const [newName, setNewName] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);

    const refAddBtn = useRef(null);

    const ERROR_EMPTY = "Please enter a name.";
    const ERROR_DUPLICATE = "Name has been entered.";

    useEffect(() => {
        const cleanErrorMsg = setInterval(() => (
            setErrorMsg(false)
        ), cleanErrorTimer);
        return () => clearInterval(cleanErrorMsg);
    }, [errorMsg]);
    
    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();

        if(validateName()) {
            props.addSanta(newName);
            setNewName('');　// clean the textbox
            setErrorMsg(false);
        }
    }

    const validateName = () => {
        if (newName === '') {
            setErrorMsg(ERROR_EMPTY);
            return false;
        }

        for(let i = 0; i < props.santas.length; i++) {
            if(props.santas[i].name === newName) {
                setErrorMsg(ERROR_DUPLICATE);
                return false;
            }
        }

        return true;
    }

    return (
        <Form className='SantaInput' onSubmit={handleAdd}>
            <FormControl 
                value={newName}
                placeholder='Enter a name here...'
                onChange={handleChange}
                maxLength={20}/>
            <Button 
                ref={refAddBtn}
                variant="outline-dark"
                type="submit" 
                value="Add">
                Add
            </Button>
            <Overlay target={refAddBtn.current} show={errorMsg} placement="top">
                <Tooltip>{errorMsg}</Tooltip>
            </Overlay>
        </Form>
    );
}