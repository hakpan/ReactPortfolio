import React from 'react';
import { Row, Col } from 'reactstrap';
import '../App.css';
import Projectcard from '../Components/Projectcard.js';
import ImageCard from '../Components/Imagediv.js';
import NavbarComp from '../Components/Navbar.js';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

    }s
    render() {
        return (
            <div>
                <Row id='nav'>
                    <NavbarComp/>
                </Row>
                <Row style={{paddingLeft: '11%'}}>
                  <Col>
                      <h1 class='header'>BootCamp Projects</h1>
                  </Col>
                </Row>
                <div style={{overflow: 'auto', whiteSpace: 'nowrap', width: '80%', margin: 'auto'}}>
                    <Projectcard/>
                </div>
                <Row style={{paddingLeft: '11%'}}>
                  <Col>
                      <h1 id='header'>Logo/Design</h1>
                  </Col>
                </Row>
                <div style={{overflow: 'auto', whiteSpace: 'nowrap', width: '80%', margin: 'auto'}}>
                  <ImageCard/>
                </div>
            </div>
        );
    }
}