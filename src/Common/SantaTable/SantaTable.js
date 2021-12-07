import React from "react";
import './SantaTable.css';
import { SantaCell } from "./SantaCell";

export function SantaTable(props) {
    if ( props.santas.length > 0 ) {
        return (
            <ul className='SantaTable'> 
                { props.santas.map( (santa) => (
                    <SantaCell 
                        santa={santa} 
                        showResult={props.showResult} 
                        removeSanta={props.removeSanta}
                        assigned={props.assignedVisible ? props.santas[santa.assigned] : null }
                    />
                ))}
            </ul>
        );
    } else {
        return (<p>There are no santa yet...</p>);
    }
}