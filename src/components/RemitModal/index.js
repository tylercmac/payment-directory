import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Moment from "moment";
import "./style.css";

export default function RemitModal({ Payee, Remittance }) {
  let totalOwed = 0;
  for (let i = 0; i < Remittance.length; i++) {
    let amnt = Remittance[i].Amount.substr(1);
    amnt = parseFloat(amnt.replace(",", ""));
    totalOwed += amnt;
  }

  totalOwed = totalOwed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  const formatName =
    Payee.Name.charAt(0) +
    Payee.Name.substr(1, Payee.Name.length - 1).toLowerCase();

  return (
    <Container>
      <Row>
        <Row className="payee-name text-success justify-content-center">
          {formatName}
        </Row>
        <Row className="text-info justify-content-center mb-2">
          Total Owed: ${totalOwed}
        </Row>
        <Row className="text-secondary justify-content-center mb-2">
          Submitted {Moment(Payee.SubmissionDate).format("M/DD/YYYY")}
        </Row>
        {Remittance.map((remitter) => (
          <Row>
            <Card className="detail-card">
              <Card.Body>
                <Row>
                  <Col className="payor-name" xs={6}>{remitter.PayorName}</Col>
                  <Col className="payor-id text-primary" xs={6}>ID: {remitter.PayorId}</Col>
                </Row>
                <div className="descript">{remitter.Description}</div>
                <div className="my-hr" />
                <Card.Text>
                  <div className="my-row">
                    <span className="text-danger">Invoice #: </span>
                    <span>{remitter.InvoiceNo}</span>
                  </div>
                  <div className="my-row">
                    <span className="text-danger">Payment Total: </span>
                    <span>{remitter.Amount}</span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Row>
    </Container>
  );
}
