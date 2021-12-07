import React from "react";
import './ResultPage.css';
import { SantaTable } from "../Common/SantaTable/SantaTable";

export function ResultPage(props) {
    return (
        <div className='SantaResult'>
            <SantaTable santas={props.santas} />
        </div>
    );
}