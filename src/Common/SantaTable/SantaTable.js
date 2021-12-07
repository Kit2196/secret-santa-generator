import React from "react";
import { SantaCell } from "./SantaCell";

export function SantaTable(props) {
    if ( props.santas.length > 0 ) {
        return (
            <ul className='SantaTable'> 
                { props.santas.map( (santa) => (
                    <SantaCell santa={santa} removeSanta={props.removeSanta}/>
                ))}
            </ul>
        );
    } else {
        return (<p>There are no santa yet...</p>);
    }
}