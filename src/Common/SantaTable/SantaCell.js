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
            <div className='SantaCell-Text'>
                <p>{props.santa.name}</p>
                { props.assigned && <p className="small-font">Assigned to {props.assigned.name}</p> }
            </div>
            { props.removeSanta && <button className='CellRemoveBtn' onClick={handleRemove}>✖</button> }
        </li>
    );
}

