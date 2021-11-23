import React from "react";
import './Header.css';
import { logo } from "../constants";

export function Header(props) {
    return (
        <div className='Header'>
            <img src={logo} alt="logo" />
            <p>Secret Santa Generator</p>
        </div>
    );
}