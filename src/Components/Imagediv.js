import React from 'react';
import FeedMe from '../Images/FeedMe.png';
import surveySquidLogo from '../Images/surveySquidLogo.png';
import Resume from '../Images/Resume.png';
import Email from '../Images/email.png';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <div style={{display: 'inline-block', margin: '10px'}}>
                <img src={FeedMe} alt="FeedMe Logo" id="image" style={{width: '318px', height: '300px'}}/>
            </div>

            <div style={{display: 'inline-block', margin: '10px'}}>
                <img src={surveySquidLogo} alt="FeedMe Logo" id="image" style={{width: '250px', height: '250px'}}/>
            </div>

             <div style={{display: 'inline-block', margin: '10px'}}>
                <img src={Resume} alt="Resume Button" id="image" style={{width: '260px', height: '250px'}}/>
            </div>

             <div style={{display: 'inline-block', margin: '10px'}}>
                <img src={Email} alt="Email Button" style={{width: '220px', height: '220px'}}/>
            </div>
        </div>
    );
  }
}