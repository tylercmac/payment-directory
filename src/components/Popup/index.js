import React, { useState } from "react";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import InfoModal from "../InfoModal";
import RemitModal from "../RemitModal";
import "./style.css";

export default function Popup(props) {
  const [key, setKey] = useState("remittance");

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        size="xl"
        className="vendor-popup"
        aria-labelledby="example-custom-modal-styling-title"
      >
        {/* <Modal.Header></Modal.Header> */}

        <Modal.Body>
            <Button
              variant="outline-danger"
              className="close"
              onClick={() => props.setShow(false)}
            >
              <span aria-hidden="true">CLOSE</span>
            </Button>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="remittance" title="Invoices">
              <RemitModal {...props} />
            </Tab>
            <Tab eventKey="info" title="Info">
              <InfoModal {...props} />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
}
