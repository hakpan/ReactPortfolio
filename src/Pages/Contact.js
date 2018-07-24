import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Contact.css';
import Email from '../Images/email.svg';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Row style={{ textAlign: 'center'}}>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col sm="3" style={{ textAlign: 'center'}}>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hakpan@gmail.com&su=Portfolio+Inquiry&tf=1" target="_blank" class="reply-email gmail">
              <img id='image' src={Email} alt='emailLogo' style={{width: '100px', height: '100px'}}/>
            </a>
        </Col>
        <Col sm="5">
          <h3><i>Have any questions about me, my projects, and experience? Click the icon to the left to send me an email.</i></h3>
          <h3> - HA</h3>
        </Col>
        
        </Row>
      </div>
    );
  }
}