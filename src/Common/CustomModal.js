import React from "react";
import { Modal } from "react-bootstrap";
import "./CustomModal.css";

export function CustomModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    { props.title }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{ props.content }</p>
            </Modal.Body>
        </Modal>
    );
}