import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardHeader, CardFooter, Collapse, Container, Row,
    Col } from 'reactstrap';
import FeedMe from '../Images/FeedMe.png';
import surveySquidLogo from '../Images/surveySquidLogo.png';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <div style={{display: 'inline-block', margin: '10px'}}>
                <img src={FeedMe} alt="FeedMe Logo" id="image" style={{width: '318px'}}/>
            </div>

            <div style={{display: 'inline-block', margin: '10px'}}>
                <img src={surveySquidLogo} alt="FeedMe Logo" id="image" style={{width: '318px'}}/>
            </div>

            <div style={{display: 'inline-block', margin: '10px'}}>
                <Card>
                    <CardBody>
                    <CardImg 
                    top width="100%" 
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" 
                    alt="Card image cap" />
                    </CardBody>
                </Card>
            </div>
            <div style={{display: 'inline-block', margin: '10px'}}>
                <Card>
                    <CardBody>
                    <CardImg 
                    top width="100%" 
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" 
                    alt="Card image cap" />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
  }
}