import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonComp from './Button';

export default class HorizontalCard extends React.Component {
  render() {
    return (
      <Container style={{maxWidth: '1400px'}}>
        <Row>
          <Col xs='6'>
            <ButtonComp/>
          </Col>
          <Col xs='6'>
            <h1>Psychic Game</h1>
            <p>HTML powered by JavaScript</p>
          </Col>
        </Row>
      </Container>
    );
  }
}