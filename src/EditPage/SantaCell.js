import React from "react";

export function SantaCell(props) {
    const handleRemove = () => {
        props.removeSanta(props.santa.id);
    };

    return (
        <li className='SantaCell'>
            <p>{props.santa.name}</p>
            <button className='CellRemoveBtn' onClick={handleRemove}>✖</button>
        </li>
    );
}

