import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Moment from "moment";
import "./style.css";

export default function RemitModal({ Payee, Remittance }) {

  let sortedInvoice = Remittance.sort((a, b) => {
    if (a.InvoiceNo > b.InvoiceNo) {
      return -1; 
    } else return 1;
  })

  let totalOwed = 0;
  for (let i = 0; i < Remittance.length; i++) {
    let amnt = Remittance[i].Amount.substr(1);
    amnt = parseFloat(amnt.replace(",", ""));
    totalOwed += amnt;
  }

  totalOwed = totalOwed.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  const formatName =
    Payee.Name.charAt(0) +
    Payee.Name.substr(1, Payee.Name.length - 1).toLowerCase();

  return (
    <Container className="remit-container">
      <Row className="main-remit-row">
        <Row className="payee-name text-success justify-content-center">
          {formatName}
        </Row>
        <Row className="text-primary justify-content-center mb-2">
          Total Owed: ${totalOwed}
        </Row>
        <Row className="text-secondary justify-content-center mb-2">
          Submitted {Moment(Payee.SubmissionDate).format("M/DD/YYYY")}
        </Row>
        {sortedInvoice.map((remitter) => (
          <Row key={remitter.PayorName} className="remit-row">
            <Card className="detail-card">
              <Card.Body className="card-body">
                <Row>
                  <Col className="invoice-num text-danger" xs={6}>Invoice #: {remitter.InvoiceNo}</Col>
                  <Col className="payor-id text-primary" xs={6}>ID: {remitter.PayorId}</Col>
                </Row>
                <Col className="payor-name" xs={12}><span className="text-secondary">Payor: </span>{remitter.PayorName}</Col>
                <div className="descript text-secondary">{remitter.Description}</div>
                <div className="my-hr" />
                <div>
                  <div className="my-row">
                    <span className="text-success">Payment Total: </span>
                    <span>{remitter.Amount}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Row>
    </Container>
  );
}
