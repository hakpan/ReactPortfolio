import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import './AboutMe.css';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';
import Resume from '../Images/Resume.png';
import aboutMePic from '../Images/aboutMePic.jpg';
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
            <a href="https://drive.google.com/file/d/16MKVV22G5j5M06vmAhus_cp_xNw2AWw-/view?usp=sharing" target={'_blank'}>
              <img class='resumeLogo' src={Resume} alt='Resume' />
            </a>
          </Col>
        </Row>
        <Row>
        <Col sm="6">
          <img src={aboutMePic} alt="HAPic" id="image" style={{width: '100%', height: '100%'}}/>
        </Col>
        <Col sm="6">
          <section>
            <p>Passionate, life-learner, that just received certification from the Universiyt of Minnesota, Coding BootCamp as a full-stack web developer. My dream job would be combining my love of design with coding. I'm looking for a career in UX/UI desgin and front-end coding.</p>
            <p>Everything I learned I did while working full time (no coding at work), and then coming home and putting my parenting hat on. Imagine what I could do if I did this for 8hours a day, 5days a week!</p>
          </section>
          <section>
            <h1>Skills</h1>
            <Table>
                <thead>
                  <tr>
                    <th>Programs</th>
                    <th>Languages/UI's</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PhotoShop</td>
                    <td>HTML {'&'} CSS</td>
                  </tr>
                  <tr>
                    <td>Illustrator</td>
                    <td>React</td>
                  </tr>
                  <tr>
                    <td>Sketch</td>
                    <td>JavaScript</td>
                  </tr>
                  <tr>
                    <td>Github</td>
                    <td>Bootstrap</td>
                  </tr>
                </tbody>
            </Table>
          </section>
        </Col>
        </Row>
      </div>
    );
  }
}