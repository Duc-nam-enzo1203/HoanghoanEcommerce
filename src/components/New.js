import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function New({ img, title, description }) {
  return (
    <Container className="p-0 m-0">
      <Row>
        <Col className="col-4">
          <img
            src={img}
            alt=""
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
          />
        </Col>
        <Col
          className="col-8"
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <h6 style={{ color: "#bd945f" }}>{title}</h6>
          <p className="description">{description}</p>
        </Col>
      </Row>
    </Container>
  );
}
