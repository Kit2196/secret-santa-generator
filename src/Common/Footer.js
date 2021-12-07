import React from 'react';
import { marked } from 'marked';
import { useState } from 'react/cjs/react.development';
import './Footer.css';
import { Overlay } from './Overlay';

export function Footer(props) {
    const [overlayContent, setOverlayContent] = useState(null);

    const creditOverlayContent = <div className="Credit">
        <h1>Credit</h1>
        <p>Illustration: <a　href="https://www.irasutoya.com/">いらすとや</a></p>
    </div>;
    
    const loadChangelog = () => {
        const changelogPath = "https://raw.githubusercontent.com/Kit2196/secret-santa-generator/main/CHANGELOG.md";
        setOverlayContent(<div>
            <p>Loading</p>
        </div>);

        fetch(changelogPath).then(
            response => response.text()
        ).then(
            text => setOverlayContent(<div className="Changelog" dangerouslySetInnerHTML={{__html: marked.parse(text)}} />)
        );
    };

    return (
        <div className='Footer'>
            <ul className='Footer-links'>
                <li onClick={() => setOverlayContent(creditOverlayContent)}>Credit</li>
                <li onClick={loadChangelog}>Change Log</li>
                <li><a href='https://github.com/Kit2196/secret-santa-generator'>Github Repository</a></li>
                <li>My page</li>
                <li>Other projects</li>
            </ul>
            {overlayContent && <Overlay content={overlayContent} disableOverlay={() => setOverlayContent(null)}/>}
        </div>
    );
};