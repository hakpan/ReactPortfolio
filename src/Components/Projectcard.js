import React from 'react';
import ButtonComp from './Button.js';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardHeader, CardFooter, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row,
    Col } from 'reactstrap';

export default class Projectcard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>Web Design Skeleton</CardTitle>
                    <CardText>HTML {'&'} CSS</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/Basic-Portfolio/'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 Nov 2017'}</CardFooter>
            </Card>
        </div>

        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>Psychic Game</CardTitle>
                    <CardText>HTML powered by JavaScript</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/Psychic-Game/'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 Dec 2017'}</CardFooter>
            </Card>
        </div>

        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>Crystal Game</CardTitle>
                    <CardText>HTML pages with jQuery library</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/week-4-game/'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 Dec 2017'}</CardFooter>
            </Card>
        </div>

        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>Triva Game</CardTitle>
                    <CardText>jQuery {'&'} JavaScript</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/TriviaGame/'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 Dec 2017'}</CardFooter>
            </Card>
        </div>

        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>Train Schedule</CardTitle>
                    <CardText>Use Firebase for data</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/Train-Scheduler/'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 Jan 2018'}</CardFooter>
            </Card>
        </div>

        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>1st Group Project</CardTitle>
                    <CardText>Team Work to complete project</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/OpenGig/welcome.html'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 Jan 2018'}</CardFooter>
            </Card>
        </div>

        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>Terminal Assignment</CardTitle>
                    <CardText>Use MySql to store, update, and return data</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/bamazon/'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 Feb 2018'}</CardFooter>
            </Card>
        </div>

        <div style={{display: 'inline-block', margin: '10px'}}>
            <Card>
                <CardBody style={{textAlign: 'center'}}>
                    <CardTitle>Project 2</CardTitle>
                    <CardText>Work with a team to create an app with a
                     database and use heroku to host</CardText>
                    <ButtonComp 
                    url={'https://floating-temple-72911.herokuapp.com/'}
                    />
                </CardBody>
                <CardFooter>{'\u00A9 March 2018'}</CardFooter>
            </Card>
        </div>
    </div>
    );
  }
}