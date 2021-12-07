import React, { useState } from "react";

export function SantaInput(props) {
    const [newSanta, setNewSanta] = useState('');
    
    const handleChange = (e) => {
        setNewSanta(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();

        if(props.addSanta(newSanta)) {
            // if new name is valid, reset the textbox
            setNewSanta('');
        }
    }

    return (
        <form className='SantaInput' onSubmit={handleAdd}>
            <input 
                value={newSanta}
                placeholder='Enter a name here...'
                onChange={handleChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
}