import React from 'react';
import FeedMe from '../Images/FeedMe.png';
import surveySquidLogo from '../Images/surveySquidLogo.png';
import Resume from '../Images/Resume.png';
import Email from '../Images/email.png';
import './Imagediv.css';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div class='hover01 column'>
            <div style={{display: 'inline-block', margin: '10px'}}>
                <figure><img src={FeedMe} alt="FeedMe Logo" id="image" style={{width: '318px', height: '300px'}}/></figure>
            </div>

            <div style={{display: 'inline-block', margin: '10px'}}>
                <figure><img src={surveySquidLogo} alt="SurveySquid" id="image" style={{width: '250px', height: '250px'}}/></figure>
            </div>

             <div style={{display: 'inline-block', margin: '10px'}}>
                <figure><img src={Resume} alt="Resume Button" id="image" style={{width: '260px', height: '250px'}}/></figure>
            </div>

             <figure style={{display: 'inline-block', margin: '10px'}}>
                <img src={Email} alt="Email Button" style={{width: '220px', height: '220px'}}/>
            </figure>
        </div>
    );
  }
}