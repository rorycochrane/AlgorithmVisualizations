// src/components/Content.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Content = ({ visualization, pythonCode, explanation, settings }) => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={12}>
          <div>{visualization}</div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Card>
            <Card.Header as="h3">Python Implementation</Card.Header>
            <Card.Body>
              <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                {pythonCode}
              </pre>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header as="h3">Explanation</Card.Header>
            <Card.Body>
              <p>{explanation}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
