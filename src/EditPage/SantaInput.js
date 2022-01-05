import { Button, ThemeProvider } from "@mui/material";
import React, { useRef, useState } from "react";
import { Form, FormControl} from "react-bootstrap";
import { ErrorOverlay } from "../Common/ErrorOverlay";
import { theme } from "../constants";

export function SantaInput(props) {
    const [newName, setNewName] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);

    const refAddBtn = useRef(null);
    
    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();

        const error = props.validateName(newName, true);
        setErrorMsg(error);

        if(!error) {
            props.addSanta(newName);
            setNewName('');　// clean the textbox
        }
    }

    return (
        <Form className='SantaInput' onSubmit={handleAdd}>
            <FormControl 
                value={newName}
                placeholder='Enter a name here...'
                onChange={handleChange}
                maxLength={20}/>
            <ThemeProvider theme={theme}>
                <Button 
                    ref={refAddBtn}
                    color="black"
                    variant="outlined"
                    type="submit" 
                    value="Add">
                    Add
                </Button>
            </ThemeProvider>
            <ErrorOverlay target={refAddBtn.current} error={[errorMsg, setErrorMsg]} />
        </Form>
    );
}