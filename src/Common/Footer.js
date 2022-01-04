import React, { useState } from 'react';
import { Button, ButtonGroup, Navbar } from 'react-bootstrap';
import { marked } from 'marked';
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

    const openPage = (url) => window.open(url, "_blank");

    return (
        <Navbar className='Footer justify-content-center'>
            <ButtonGroup className='Footer-links'>
                <Button variant="link" onClick={() => setOverlayContent(creditOverlayContent)}>Credit</Button>
                <Button variant="link" onClick={loadChangelog}>Change Log</Button>
                <Button variant="link" onClick={() => openPage('https://github.com/Kit2196/secret-santa-generator')}>Github Repository</Button>
                <Button variant="link" >My page</Button>
                <Button variant="link" >Other projects</Button>
            </ButtonGroup>
            {overlayContent && <Overlay content={overlayContent} disableOverlay={() => setOverlayContent(null)}/>}
        </Navbar>
    );
};