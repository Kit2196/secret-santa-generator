import React from "react";
import './EditPage.css';
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { SantaInput } from "./SantaInput";

export function EditPage(props){
    return (
        <div className='EditPage'>
            <SantaInput addSanta={props.addSanta} />
            <SantaTable santas={props.santas} removeSanta={props.removeSanta} />
        </div>
    );
}

