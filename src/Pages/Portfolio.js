import React, { Component } from 'react';
import { Collapse, Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import Projectcard from '../Components/Projectcard.js';
import ImageCard from '../Components/Imagediv.js';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Row>
                  <Col>
                      <h1 id='header'>BootCamp Projects</h1>
                      <p id='pheader'>A couple of my BootCamp Projects that I enjoyed working on.</p>
                  </Col>
                </Row>
                <div style={{overflow: 'auto', whiteSpace: 'nowrap', width: '93%', margin: 'auto'}}>
                    <Projectcard/>
                </div>
                <Row>
                  <Col>
                      <h1 id='header'>Logo Design</h1>
                  </Col>
                </Row>
                <div style={{overflow: 'auto', whiteSpace: 'nowrap', width: '93%', margin: 'auto'}}>
                  <ImageCard/>
                </div>
            </div>
        );
    }
}