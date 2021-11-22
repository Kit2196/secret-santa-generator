import React from "react";
import { Start } from "./Start";
import './SecretSanta.css';

const logo = 'https://1.bp.blogspot.com/-NtTQSOUkR9o/XVKfuVfLHcI/AAAAAAABUEA/1JsyRnHO9-8SxPb_OYm-HKAQ10dV2C45QCLcBGAs/s1600/christmas_black_santa.png';

export class SecretSanta extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='SecretSanta'>
                <Start logo={logo} onClick={null}/>
            </div>
        );
    }
}