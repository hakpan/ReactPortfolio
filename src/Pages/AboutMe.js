import React from 'react';
import { Row, Col } from 'reactstrap';
import './AboutMe.css';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';
import Resume from '../Images/Resume.png';
import NavbarComp from '../Components/Navbar.js';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Row id='nav'>
          <NavbarComp/>
        </Row>
        <Row>
          <Col style={{ textAlign: 'center'}}>
            <h1>About</h1>
          </Col>
        </Row>
        <Row style={{ textAlign: 'center'}}>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <a href="https://www.linkedin.com/in/heather-akpan-322023127" target={'_blank'}>
              <img class='linkedinLogo' src={linkedin} alt='linkedIn' />
            </a>
            <a href="https://github.com/hakpan" target={'_blank'}>
              <img class='gitLogo' src={github} alt='github' />
            </a>
            <a href="https://drive.google.com/file/d/1so5uQGJpz9zj4aIyRNI0K5p6hFA0jsZt/view?usp=sharing" target={'_blank'}>
              <img class='resumeLogo' src={Resume} alt='Resume' />
            </a>
          </Col>
        </Row>
        <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
            <p>Passionate, life-learner, that just received certification from the Universiyt of Minnesota, Coding BootCamp as a full-stack web developer. My dream job would be combining my love of design with coding. I'm looking for a career in UX/UI desgin and front-end coding.</p>
            <p>Everything I learned I did while working full time (no coding at work), and then coming home and putting my parenting hat on. Imagine what I could do if I did this for 8hours a day, 5days a week!</p>
        </Col>
        </Row>
      </div>
    );
  }
}