import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import NavbarComp from './Navbar.js';

class JumboComp extends React.Component {
    constructor(props) {
      super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
            };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
      return (
        <Jumbotron id='jumbo'>
            <Container>
                <Row>
                    <Col>
                        <span>HEATHER </span>
                        <span id="akpan">Akpan</span>
                    </Col>
                </Row>
                <Row id='nav'>
                    <NavbarComp/>
                </Row>
            </Container>
        </Jumbotron>
      );
    }
  }
  
  export default JumboComp;