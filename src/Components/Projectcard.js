import React from 'react';
import ButtonComp from './Button.js';
import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import './Projectcard.css';

export default class Projectcard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>Web Design Skeleton</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>HTML {'&'} CSS</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/Basic-Portfolio/'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Nov 2017'}</div>
            </div>
        </div>

        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>Psychic Game</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>HTML powered by JavaScript</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/Psychic-Game/'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Dec 2017'}</div>
            </div>
        </div>

        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>Crystal Game</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>HTML pages with jQuery library</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/week-4-game/'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Dec 2017'}</div>
            </div>
        </div>

        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>Trivia Game</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>jQuery {'&'} JavaScript</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/TriviaGame/'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Dec 2017'}</div>
            </div>
        </div>

        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>Train Schedule</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>Use Firebase for data</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/Train-Scheduler/'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Jan 2018'}</div>
            </div>
        </div>
        
        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>1st Group Project</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>Work in a team to create an app</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/OpenGig/welcome.html'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Jan 2018'}</div>
            </div>
        </div>

        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>Terminal Assignment</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>Use MySql to store, update, and return data</CardText>
                    <ButtonComp 
                    url={'https://hakpan.github.io/bamazon/'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 Feb 2018'}</div>
            </div>
        </div>
        
        <div style={{display: 'inline-block', margin: '20px'}}>
            <div>
                <div class='cardBody' style={{textAlign: 'center'}}>
                    <CardTitle style={{color: 'grey', textAlign: 'center'}}>Project 2</CardTitle>
                    <CardText style={{color: 'grey', textAlign: 'center'}}>Create app with database and hosted on heroku</CardText>
                    <ButtonComp 
                    url={'https://floating-temple-72911.herokuapp.com/'}
                    />
                </div>
                <div class='footer' style={{textAlign: 'center', color: 'grey'}}>{'\u00A9 March 2018'}</div>
            </div>
        </div>

    </div>
    );
  }
}