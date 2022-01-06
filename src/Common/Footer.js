import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Navbar } from "react-bootstrap";
import { marked } from "marked";
import "./Footer.css";
import { CustomModal } from "./CustomModal";

const changelogPath =
  "https://raw.githubusercontent.com/Kit2196/secret-santa-generator/main/CHANGELOG.md";

export function Footer(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [myPageClicked, setMyPageClicked] = useState(false);
  const [projectClicked, setprojectClicked] = useState(false);

  useEffect(() => {
    const resetTimer = setInterval(() => setMyPageClicked(false), 1000);
    return () => clearInterval(resetTimer);
  }, [myPageClicked]);

  useEffect(() => {
    const resetTimer = setInterval(() => setprojectClicked(false), 1000);
    return () => clearInterval(resetTimer);
  }, [projectClicked]);

  const showCredit = () => {
    setModalTitle("Credit");
    setModalContent(
      <p>
        Illustration: <a href="https://www.irasutoya.com/">いらすとや</a>
      </p>
    );
    setShowModal(true);
  };

  const showChangeLog = () => {
    setModalTitle(<p>Loading</p>);
    setShowModal(true);

    fetch(changelogPath)
      .then((response) => response.text())
      .then((text) => {
        setModalTitle(<p>ChangeLog</p>);
        setModalContent(
          <div
            className="Changelog"
            dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
          />
        );
      });
  };

  const openPage = (url) => window.open(url, "_blank");

  return (
    <Navbar className="Footer justify-content-center">
      <ButtonGroup className="Footer-links">
        <Button variant="link" onClick={showCredit}>
          Credit
        </Button>
        <Button variant="link" onClick={showChangeLog}>
          Change Log
        </Button>
        <Button
          variant="link"
          onClick={() =>
            openPage("https://github.com/Kit2196/secret-santa-generator")
          }
        >
          Github Repository
        </Button>
        <Button variant="link" onClick={() => setMyPageClicked(true)}>
          {myPageClicked ? "WIP" : "My page"}
        </Button>
        <Button variant="link" onClick={() => setprojectClicked(true)}>
          {projectClicked ? "WIP" : "Other projects"}
        </Button>
      </ButtonGroup>
      <CustomModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={modalTitle}
        content={modalContent}
      />
    </Navbar>
  );
}
