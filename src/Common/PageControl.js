import React from "react";
import './PageControl.css';

export function PageControl(props) {
    return (
        <div className='PageControl'>
            {
                props.buttons.map((button) => {
                    const [action, text, enabled] = button;

                    return (
                        <button onClick={action} disabled={!enabled}>
                            {text}
                        </button>
                    );
                })
            }
        </div>
    );
}