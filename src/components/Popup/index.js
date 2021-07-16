import React, { useState } from "react";
import { Modal, Tabs, Tab } from "react-bootstrap";
import InfoModal from '../InfoModal'
import RemitModal from "../RemitModal";

export default function Popup(props) {
  const [key, setKey] = useState('info');


  return (
    <>
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        size='lg'
        aria-labelledby="example-custom-modal-styling-title"
      >
        {/* <Modal.Header closeButton>

        </Modal.Header> */}

        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="info" title="Payee Info">
              <InfoModal {...props} />
            </Tab>
            <Tab eventKey="remittance" title="Remittance">
              <RemitModal {...props} />
            </Tab>
          </Tabs>

        </Modal.Body>
      </Modal>
    </>
  );
}
