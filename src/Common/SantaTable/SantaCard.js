import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Card } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { EditCardModal } from "./EditCardModal";

export function SantaCard(props) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowResult = () => {
    props.showResult(props.santa);
  };

  const handleRemove = () => {
    props.removeSanta(props.index);
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
      <DeleteIcon />
    </IconButton>
  );

  const viewButton = (
    <IconButton className="right" fontSize="small" onClick={handleShowResult}>
      <VisibilityIcon />
    </IconButton>
  );

  return (
    <Card key={props.index} className="SantaCard">
      <Card.Body>
        {props.removeSanta && removeButton}
        {props.editSanta && editButton}
        {props.showResult && viewButton}
        <Card.Title>{props.santa.name}</Card.Title>
        {props.assigned && (
          <Card.Text>Assigned to {props.assigned.name}</Card.Text>
        )}
        <EditCardModal
          index={props.index}
          santa={props.santa}
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          validateName={props.validateName}
          editSanta={props.editSanta}
        />
      </Card.Body>
    </Card>
  );
}
