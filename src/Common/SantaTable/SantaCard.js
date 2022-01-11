import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Card } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { EditCardModal } from "./EditCardModal";
import { PAGE } from "../../constants";

export function SantaCard(props) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleFocus = () => props.handleFocusClicked(props.index);

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

  const toggleRelationshipButton = (
    <IconButton className="right" fontSize="small" onClick={handleFocus}>
      <AddReactionIcon />
    </IconButton>
  );

  const getButtons = () => {
    if (props.page === PAGE.EDIT) {
      switch (props.focusStatus(props.index)) {
        case null:
          return (
            <>
              {removeButton}
              {editButton}
              {toggleRelationshipButton}
            </>
          );
        case "giftable-focused":
          return (
            <IconButton
              className="right"
              fontSize="small"
              onClick={handleFocus}
            >
              <ArrowBackIcon />
            </IconButton>
          );
        case "giftable-enabled":
          return (
            <IconButton
              className="right"
              fontSize="small"
              onClick={handleFocus}
            >
              <RemoveIcon />
            </IconButton>
          );
        case "giftable-disabled":
          return (
            <IconButton
              className="right"
              fontSize="small"
              onClick={handleFocus}
            >
              <AddIcon />
            </IconButton>
          );
        default:
          return null;
      }
    } else {
      return viewButton;
    }
  };

  return (
    <Card
      key={props.index}
      className={
        "SantaCard " + (props.focusStatus && props.focusStatus(props.index))
      }
    >
      <Card.Body>
        {getButtons()}
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
