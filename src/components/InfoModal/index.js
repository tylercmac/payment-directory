import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Moment from "moment";
import "./style.css";

export default function InfoModal({ Payee, Payment }) {
  const formatName =
    Payee.Name.charAt(0) +
    Payee.Name.substr(1, Payee.Name.length - 1).toLowerCase();

  return (
    <Container>
      <Row>
        <Row className="payee-name text-success justify-content-center">
          {formatName}
        </Row>
        <Row className="text-secondary justify-content-center mb-2">
          Submitted {Moment(Payee.SubmissionDate).format("M/DD/YYYY")}
        </Row>
        <Col xs={12} md={6}>
          <Row>
            <Card className="detail-card">
              <Card.Body>
                <Card.Title>Contact Info</Card.Title>
                <Card.Text>
                  <Row>
                    <span className="text-danger">Attention: </span>
                    {Payee.Attention}
                  </Row>
                  <Row>
                    <span className="text-danger">Phone: </span>
                    {Payee.Phone}
                  </Row>
                  <Row>
                    <span className="text-danger">Fax: </span>
                    {Payee.Fax}
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card className="detail-card">
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <Card.Text>
                  <Row>{`${Payee.Address.Address1} ${Payee.Address.Address2}`}</Row>
                  <Row>{`${Payee.Address.City}, ${Payee.Address.StateOrProvince} ${Payee.Address.PostalCode}`}</Row>
                  <Row>
                    {Payee.Address.Country === "US"
                      ? "United States"
                      : Payee.Address.Country}
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Card className="detail-card">
            <Card.Body>
              <Card.Title>Payment Details</Card.Title>
              <Card.Text>
                <Row>
                  <span className="text-danger">Card Number: </span>
                  {Payment.PAN}
                </Row>
                <Row>
                  <Col xs={6}>
                    <span className="text-danger">CVV: </span>
                    {Payment.CVV}
                  </Col>
                  <Col xs={6}>
                    <span className="text-danger">Exp Date: </span>
                    {Payment.Exp}
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
