import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import stateAbbr from "../stateAbbr"
import "./style.css";

export default function InfoModal({ Payee, Payment }, props) {
  const formatName =
  Payee.Name.charAt(0) +
  Payee.Name.substr(1, Payee.Name.length - 1).toLowerCase();

  return (
    <Container>
      <Row>
        <Row className="payee-name text-success justify-content-center">
          {formatName}
        </Row>
        <Col xs={12} md={6} className="info-col">
          <Row className="justify-content-center">
            <Card className="detail-card contact-info">
              <Card.Body>
                <Card.Title>Contact Info</Card.Title>
                <div className="my-hr" />
                <div>
                  <Row className="my-row mb-1">
                    <span className="text-danger tag">Attention: </span>
                    <span>{Payee.Attention}</span>
                  </Row>
                  <Row className="my-row mb-1">
                    <span className="text-danger tag">Phone: </span>
                    <span>{Payee.Phone}</span>
                  </Row>
                  <Row className="my-row mb-1">
                    <span className="text-danger tag">Fax: </span>
                    <span>{Payee.Fax}</span>
                  </Row>
                </div>
              </Card.Body>
            </Card>
            <br />
            <Card className="detail-card address">
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <div className="my-hr" />
                <div>
                  <Row>
                    <span>{`${Payee.Address.Address1} ${Payee.Address.Address2}`}</span>
                  </Row>
                  <Row>
                    <span>{`${Payee.Address.City}, ${stateAbbr(Payee.Address.StateOrProvince, 'abbr')} ${Payee.Address.PostalCode}`}</span>
                  </Row>
                  <Row>
                    <span>
                      {Payee.Address.Country === "US"
                        ? "United States"
                        : Payee.Address.Country}
                    </span>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Col>

        <Col xs={12} md={6} className="pay-info">
          <Row className="justify-content-center">
            <Card className="detail-card payment">
              <Card.Body>
                <Card.Title>Payment Details</Card.Title>
                <div className="my-hr" />
                <div>
                  <div className="my-row mb-2">
                    <span className="text-danger">Card Number: </span>
                    <span>{Payment.PAN}</span>
                  </div>
                  <Row className="my-row mb-2">
                    <Col xs={6} className="mb-1 cvv">
                      <span className="text-danger">CVV: </span>
                      {Payment.CVV}
                    </Col>
                    <Col md={12} lg={6} className="my-col cvv">
                      <span className="text-danger">Exp Date: </span>
                      {Payment.Exp}
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
