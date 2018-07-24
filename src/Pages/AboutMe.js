import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import './AboutMe.css';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';
import Resume from '../Images/Resume.png';
import aboutMePic from '../Images/headShot.png';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
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
              <img class='gitLogo' src={github} alt='github' style={{width: '75px', height: '70px'}}/>
            </a>
            <a href="https://drive.google.com/file/d/16MKVV22G5j5M06vmAhus_cp_xNw2AWw-/view?usp=sharing" target={'_blank'}>
              <img class='resumeLogo' src={Resume} alt='Resume' />
            </a>
          </Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col sm="3" style={{textAlign: 'left'}}>
            <img src={aboutMePic} alt="HAheadShot" id="image" style={{width: '100%'}}/>
          </Col>
          <Col sm="5">
            <p>Passionate, life-learner. I have a B.S in Multidisciplinary Studies and most recently a certification from the Universiyt of Minnesota, Coding BootCamp as a full-stack web developer. I'm continuing my web design/development learning by taking classes in web design, JavaScript, additional HTML {'&'} CSS classes, and desing concepts from Minneapolis Community and Technical College.</p>
            <p>My passion for web design started when I was 17. I would spend hours manipulating and adding HTML {'&'} CSS to my social media profile page. I learned PhotoShop so that I could edit photos and images on the web. I stopped coding because teenage life got in the way.</p><p>Within the last 5 years I have worked around developers and my curiosity to learn coding grew. I attend the coding bootcamp while working full-time and then coming home and putting my parenting hat on. I found time to complete the course work because I'm determined to learn and I have a genuine interest in what I'm learning.</p>
            <p>I'm excitied to continue my learning and to add to my portfolio.</p>
          </Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
        <Col sm="8">
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