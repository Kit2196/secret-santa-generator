import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { Card } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { EditCardModal } from "./EditCardModal";

export function SantaCard(props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowResult = () => {
    props.showResult(props.santa);
  };

  const handleRemove = () => {
    props.removeSanta(props.santa.id);
  };

  const editButton = (
    <IconButton
      className="right"
      fontSize="small"
      onClick={() => setShowEditModal(true)}
    >
      <EditIcon />
    </IconButton>
  );

  const removeButton = (
    <IconButton className="right" fontSize="small" onClick={handleRemove}>
      <CloseIcon />
    </IconButton>
  );

  return (
    <Card
      className="SantaCard"
      onClick={props.showResult ? handleShowResult : null}
    >
      <Card.Body>
        {props.removeSanta && removeButton}
        {true && editButton}
        <Card.Title>{props.santa.name}</Card.Title>
        {props.assigned && (
          <Card.Text>Assigned to {props.assigned.name}</Card.Text>
        )}
        <EditCardModal
          {...props}
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
        />
      </Card.Body>
    </Card>
  );
}
