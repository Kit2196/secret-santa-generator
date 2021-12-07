import React from "react";
import './EditPage.css';
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { SantaInput } from "./SantaInput";
import { PAGE } from "../constants";

export function EditPage(props){
    const handleConfirm = () => {
        props.toPage(PAGE.RESULT);
    };

    const handleBack = () => {
        props.toPage(PAGE.START);
    }

    const isSantaListValid = () => {
        return props.santas.length >= 2;
    };
    

    return (
        <div className='EditPage'>
            <SantaInput addSanta={props.addSanta} />
            <SantaTable santas={props.santas} removeSanta={props.removeSanta} />
            <div className='ButtonBar'>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleConfirm} disabled={!isSantaListValid()}>Confirm</button>
            </div>
        </div>
    );
}

