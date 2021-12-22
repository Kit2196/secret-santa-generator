import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export function SantaInput(props) {
    const [newSanta, setNewSanta] = useState('');
    
    const handleChange = (e) => {
        setNewSanta(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();

        props.addSanta(newSanta);
        setNewSanta('');　// clean the textbox
    }

    return (
        <Form className='SantaInput' onSubmit={handleAdd}>
            <FormControl 
                value={newSanta}
                placeholder='Enter a name here...'
                onChange={handleChange}
                maxLength={20}/>
            <Button 
                variant="outline-dark"
                type="submit" 
                value="Add" 
                disabled={!props.isSantaNameValid(newSanta)}>
                Add
            </Button>
        </Form>
    );
}