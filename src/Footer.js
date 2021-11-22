import React from 'react';
import './Footer.css';

export function Footer(props) {
    return (
        <div className='Footer'>
            <ul className='Footer-links'>
                <li><a href=''>Credit</a></li>
                <li><a href=''>Change Log</a></li>
                <li><a href='https://github.com/Kit2196/secret-santa-generator'>Github Repository</a></li>
                <li><a href=''>My page</a></li>
                <li><a href=''>Other projects</a></li>
            </ul>
        </div>
    );
};