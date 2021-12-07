import React from "react";

export function SantaCell(props) {
    const handleRemove = () => {
        props.removeSanta(props.santa.id);
    };

    return (
        <li key={props.santa.id} className='SantaCell' >
            <p>{props.santa.name}</p>
            { props.removeSanta && <button className='CellRemoveBtn' onClick={handleRemove}>✖</button> }
        </li>
    );
}

