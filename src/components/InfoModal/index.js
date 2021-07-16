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
        <Col xs={12} md={6}>
          <Row>
            <Card className="detail-card">
              <Card.Body>
                <Card.Title>Contact Info</Card.Title>
                <div className="my-hr" />
                <Card.Text>
                  <Row className="my-row">
                    <span className="text-danger">Attention: </span>
                    <span>{Payee.Attention}</span>
                  </Row>
                  <Row className="my-row">
                    <span className="text-danger">Phone: </span>
                    <span>{Payee.Phone}</span>
                  </Row>
                  <Row className="my-row">
                    <span className="text-danger">Fax: </span>
                    <span>{Payee.Fax}</span>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card className="detail-card">
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <div className="my-hr" />
                <Card.Text>
                  <Row><span>{`${Payee.Address.Address1} ${Payee.Address.Address2}`}</span></Row>
                  <Row><span>{`${Payee.Address.City}, ${Payee.Address.StateOrProvince} ${Payee.Address.PostalCode}`}</span></Row>
                  <Row><span>
                    {Payee.Address.Country === "US"
                      ? "United States"
                      : Payee.Address.Country}</span>
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
              <div className="my-hr" />
              <Card.Text>
                <Row>
                  <span className="text-danger">Card Number: </span>
                  <span>{Payment.PAN}</span>
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
