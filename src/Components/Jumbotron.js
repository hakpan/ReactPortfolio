import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import '../App.css';
import hero from '../Images/hero.png';

class JumboComp extends React.Component {
  
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