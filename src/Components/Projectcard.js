import React from 'react';
import ButtonComp from './Button.js';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, Button, CardSubtitle, CardImg, CardFooter, CardDeck } from 'reactstrap';
import './Projectcard.css';
import FeedMe from '../Images/FeedMe.png';
import surveySquidLogo from '../Images/surveySquidLogo.png';
import Resume from '../Images/Resume.png';
import Email from '../Images/email.png';
import HaSmile from '../Images/haSmile.svg';

const Message = props => <div>Hello{props.msg}</div>;
const Title = props => <CardTitle>{props.title}</CardTitle>;

export default class Projectcard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

    <div>
        <Message msg="A Generic Hello World Text" />
        <Message msg="Creating Reusable React Components" />
        <Title title='Web Design Skeleton'/>
    </div> 

//     <CardDeck>
//         {/* <Row> */}
//             {/* <Col xs="6" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>Web Design Skeleton</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>First time using HTML {'&'} CSS to create a basic portfolio.</CardText>
//                         <CardText style={{textAlign: 'center'}}>Nov 2017</CardText>
//                         <ButtonComp url={'https://hakpan.github.io/Basic-Portfolio/'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//             {/* <Col xs="auto" sm="4"> */}
//                 <Card style={{borderRadius: '0px'}}>
//                     <img src={FeedMe} alt="FeedMe Logo" id="image" style={{width: '318px', height: '300px'}}/>
//                     <CardBody CardBody style={{textAlign: 'center'}}>
//                         <CardTitle>FeedMe Logo</CardTitle>
//                         <CardSubtitle>BootCamp Project 3</CardSubtitle>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//             {/* <Col xs="6" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>Psychic Game</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>HTML powered by JavaScript</CardText>
//                         <CardText style={{textAlign: 'center'}}>Dec 2017</CardText>
//                         <ButtonComp url={'https://hakpan.github.io/Psychic-Game/'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//         {/* </Row> */}
        
//         {/* ------------- Row 2 --------------*/}
//         {/* <Row> */}
//             {/* <Col xs="auto" sm="4"> */}
//                 <Card style={{borderRadius: '0px', alignContent: 'center'}}>
//                     <img src={HaSmile} alt="logo" id="image" style={{width: '250px', height: '250px'}}/>
//                     <CardBody CardBody style={{textAlign: 'center'}}>
//                         <CardTitle>My Logo</CardTitle>
//                         <CardSubtitle>Portfolio</CardSubtitle>
//                     </CardBody>
//                 </Card>
//             {/* </Col>
//             <Col xs="6" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>Crystal Card Game</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>HTLM with JQuery library.</CardText>
//                         <CardText style={{textAlign: 'center'}}>Dec 2017</CardText>
//                         <ButtonComp url={'https://hakpan.github.io/week-4-game/'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col>
//             <Col xs="auto" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>Trivia Game</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>jQuery {'&'} JavaScript</CardText>
//                         <CardText style={{textAlign: 'center'}}>Dec 2017</CardText>
//                         <ButtonComp url={'https://hakpan.github.io/TriviaGame/'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//         {/* </Row> */}

//         {/* ------------- Row 3--------------*/}
//         {/* <Row> */}
//             {/* <Col xs="6" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>Train Schedule</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>HTLM {'&'} CSS, JavaScript, and Firebase for data.</CardText>
//                         <CardText style={{textAlign: 'center'}}>Jan 2018</CardText>
//                         <ButtonComp url={'https://hakpan.github.io/Train-Scheduler/'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//             {/* <Col xs="auto" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>OpenGig</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>1st Group Project using Bootstrap, JavaScript, and API's</CardText>
//                         <CardText style={{textAlign: 'center'}}>Jan 2018</CardText>
//                         <ButtonComp url={'https://hakpan.github.io/OpenGig/welcome.html'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//             {/* <Col xs="auto" sm="4"> */}
//                 <Card style={{borderRadius: '0px', alignContent: 'center'}}>
//                     <img src={surveySquidLogo} alt="SurveySquid" id="image" style={{width: '250px', height: '250px'}}/>
//                     <CardBody CardBody style={{textAlign: 'center'}}>
//                         <CardTitle>Survey Squid</CardTitle>
//                         <CardSubtitle>2nd Group Project logo</CardSubtitle>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//         {/* </Row> */}
        
// {/* ---------------- Row 4 --------------- */}
//         {/* <Row> */}
//             {/* <Col xs="6" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>Bamazon</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>Use Node to code an app in the terminal.</CardText>
//                         <CardText style={{textAlign: 'center'}}>Feb 2018</CardText>
//                         <ButtonComp url={'https://hakpan.github.io/bamazon/'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col>
//             <Col xs="auto" sm="4"> */}
//                 <Card style={{borderRadius: '0px', alignContent: 'center'}}>
//                     <img src={Email} alt="Email Button" style={{width: '220px', height: '220px'}}/>
//                     <CardBody CardBody style={{textAlign: 'center'}}>
//                         <CardTitle>Email Button</CardTitle>
//                         <CardSubtitle>Portfolio</CardSubtitle>
//                     </CardBody>
//                 </Card>
//             {/* </Col>
//             <Col xs="auto" sm="4"> */}
//                 <Card style={{borderRadius: '0px', backgroundColor: '#333333'}}>
//                     <CardBody style={{textAlign: 'center', color:'#ffffff'}}>
//                         <CardTitle>BootCamp</CardTitle>
//                         <CardSubtitle>Survey Squid</CardSubtitle>
//                         <CardText style={{textAlign: 'center'}}>2nd Group Project using Bootstrap, JavaScript, MongoDB, and API's.</CardText>
//                         <CardText style={{textAlign: 'center'}}>March 2018</CardText>
//                         <ButtonComp url={'https://floating-temple-72911.herokuapp.com/'}/>
//                     </CardBody>
//                 </Card>
//             {/* </Col> */}
//         {/* </Row> */}

//     </CardDeck>

    // <div>
    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: '#333333', textAlign: 'center'}}>Web Design Skeleton</CardTitle>
    //                 <CardText style={{color: '#333333', textAlign: 'center'}}>HTML {'&'} CSS</CardText>
    //                 <ButtonComp 
    //                 url={'https://hakpan.github.io/Basic-Portfolio/'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Nov 2017'}</div>
    //         </div>
    //     </div>

    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: 'grey', textAlign: 'center'}}>Psychic Game</CardTitle>
    //                 <CardText style={{color: 'grey', textAlign: 'center'}}>HTML powered by JavaScript</CardText>
    //                 <ButtonComp 
    //                 url={'https://hakpan.github.io/Psychic-Game/'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Dec 2017'}</div>
    //         </div>
    //     </div>

    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: 'grey', textAlign: 'center'}}>Crystal Game</CardTitle>
    //                 <CardText style={{color: 'grey', textAlign: 'center'}}>HTML pages with jQuery library</CardText>
    //                 <ButtonComp 
    //                 url={'https://hakpan.github.io/week-4-game/'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Dec 2017'}</div>
    //         </div>
    //     </div>

    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: 'grey', textAlign: 'center'}}>Trivia Game</CardTitle>
    //                 <CardText style={{color: 'grey', textAlign: 'center'}}>jQuery {'&'} JavaScript</CardText>
    //                 <ButtonComp 
    //                 url={'https://hakpan.github.io/TriviaGame/'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Dec 2017'}</div>
    //         </div>
    //     </div>

    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: 'grey', textAlign: 'center'}}>Train Schedule</CardTitle>
    //                 <CardText style={{color: 'grey', textAlign: 'center'}}>Use Firebase for data</CardText>
    //                 <ButtonComp 
    //                 url={'https://hakpan.github.io/Train-Scheduler/'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Jan 2018'}</div>
    //         </div>
    //     </div>
        
    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: 'grey', textAlign: 'center'}}>1st Group Project</CardTitle>
    //                 <CardText style={{color: 'grey', textAlign: 'center'}}>Work in a team to create an app</CardText>
    //                 <ButtonComp 
    //                 url={'https://hakpan.github.io/OpenGig/welcome.html'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Jan 2018'}</div>
    //         </div>
    //     </div>

    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: 'grey', textAlign: 'center'}}>Terminal Assignment</CardTitle>
    //                 <CardText style={{color: 'grey', textAlign: 'center'}}>Use MySql to store, update, and return data</CardText>
    //                 <ButtonComp 
    //                 url={'https://hakpan.github.io/bamazon/'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Feb 2018'}</div>
    //         </div>
    //     </div>
        
    //     <div style={{display: 'inline-block', margin: '20px'}}>
    //         <div>
    //             <div class='cardBody' style={{textAlign: 'center'}}>
    //                 <CardTitle style={{color: 'grey', textAlign: 'center'}}>Project 2</CardTitle>
    //                 <CardText style={{color: 'grey', textAlign: 'center'}}>Create app with database and hosted on heroku</CardText>
    //                 <ButtonComp 
    //                 url={'https://floating-temple-72911.herokuapp.com/'}
    //                 />
    //             </div>
    //             <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 March 2018'}</div>
    //         </div>
    //     </div>

    // </div>
    );
  }
}