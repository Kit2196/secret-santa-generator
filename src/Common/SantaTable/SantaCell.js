import React from "react";

export function SantaCell(props) {
    const handleShowResult = () => {
        props.showResult(props.santa);
    }

    const handleRemove = () => {
        props.removeSanta(props.santa.id);
    };

    return (
        <li 
            key={props.santa.id} 
            className='SantaCell' 
            onClick={props.showResult? handleShowResult : null}
        >
            <p>{props.santa.name}</p>
            { props.removeSanta && <button className='CellRemoveBtn' onClick={handleRemove}>✖</button> }
            { props.assigned && <p>Assigned to {props.assigned.name}</p> }
        </li>
    );
}

