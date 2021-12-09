import React, { useState } from "react";

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
        <form className='SantaInput' onSubmit={handleAdd}>
            <input 
                value={newSanta}
                placeholder='Enter a name here...'
                onChange={handleChange}
                maxLength={20}
            />
            <input type="submit" value="Add" disabled={!props.isSantaNameValid(newSanta)} />
        </form>
    );
}