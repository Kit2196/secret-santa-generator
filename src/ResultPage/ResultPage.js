import React, { useState } from "react";
import './ResultPage.css';
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { Overlay } from "../Common/Overlay";

export function ResultPage(props) {
    const [overlayContent, setOverlayContent] = useState(null);

    const showResult = (santa) => {
        setOverlayContent(<div className="Overlay-Result">
            <p>{santa.name},</p>
            <p>You are assigned to <strong>{santa.assigned}</strong></p>
        </div>);
    }

    return (
        <div className='SantaResult'>
            <SantaTable santas={props.santas} showResult={showResult} />
            {overlayContent && <Overlay content={overlayContent} disableOverlay={() => setOverlayContent(null)}/>}
        </div>
    );
}