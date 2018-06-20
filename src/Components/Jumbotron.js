import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import '../App.css';
import hero from '../Images/hero.png';

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

        <Jumbotron>
            <Container>
                <Row>
                    <Col style={{paddingTop: '150px', justifyContent: 'center'}}>
                        <span>HEATHER AKPAN</span>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
      );
    }
  }
  
  export default JumboComp;