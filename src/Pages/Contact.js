import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Contact.css';
import Email from '../Images/email.png';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Col sm="12" md={{ size: 8, offset: 2 }} style={{    textAlign: 'center'}}>
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hakpan@gmail.com&su=Portfolio+Inquiry&tf=1" target="_blank" class="reply-email gmail">
            <img id='image' src={Email} alt='emailLogo' />
          </a>
        </Col>
      </div>
    );
  }
}