import React from "react";
import './EditPage.css';
import { Button } from "react-bootstrap";
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
            <SantaInput addSanta={props.addSanta} isSantaNameValid={props.isSantaNameValid} />
            <SantaTable santas={props.santas} removeSanta={props.removeSanta} />
            <div className='ButtonBar'>
                <Button variant="outline-dark" onClick={handleBack}>Back</Button>
                <Button variant="outline-dark" onClick={handleConfirm} disabled={!isSantaListValid()}>Confirm</Button>
            </div>
        </div>
    );
}

