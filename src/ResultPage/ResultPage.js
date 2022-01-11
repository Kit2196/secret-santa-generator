import React, { useEffect, useState } from "react";
import "./ResultPage.css";
import { Container } from "react-bootstrap";
import { SantaTable } from "../Common/SantaTable/SantaTable";
import { CustomModal } from "../Common/CustomModal";
import { PAGE, theme } from "../constants";
import { Button, ThemeProvider } from "@mui/material";
import { SantaGenerator } from "../SantaGenerator";

export function ResultPage(props) {
  const [santas, setSantas] = useState(props.santas);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const [assignedVisible, setAssignedVisibility] = useState(false);

  // Assign recipient once when the page is loaded
  useEffect(() => {
    handleShuffle();
  }, []);

  const handleBack = () => {
    props.toPage(PAGE.EDIT);
  };

  const handleShuffle = () => {
    setSantas(SantaGenerator.shuffle(santas, props.giftable));
  };

  const handleShow = () => {
    setAssignedVisibility(!assignedVisible);
  };

  const handleFinish = () => {
    props.toPage(PAGE.START);
  };

  const showResult = (santa) => {
    // find recipient by array index
    const recipient = santas[santa.assigned];

    setModalTitle(<p>{santa.name}</p>);
    setModalContent(
      <p>
        Your recipient is <strong>{recipient.name}</strong>!
      </p>
    );
    setShowModal(true);
  };

  return (
    <Container className="ResultPage" fluid>
      <SantaTable
        page={PAGE.RESULT}
        santas={santas}
        showResult={showResult}
        assignedVisible={assignedVisible}
      />
      <div className="ButtonBar">
        <ThemeProvider theme={theme}>
          <Button color="black" variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button color="black" variant="outlined" onClick={handleShuffle}>
            Reshuffle!
          </Button>
          <Button color="black" variant="outlined" onClick={handleShow}>
            Show All!
          </Button>
          <Button color="black" variant="outlined" onClick={handleFinish}>
            Finished
          </Button>
        </ThemeProvider>
      </div>
      <CustomModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={modalTitle}
        content={modalContent}
      />
    </Container>
  );
}
