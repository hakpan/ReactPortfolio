import React from 'react';
import { Button } from 'reactstrap';
import './Button.css';

export default class ButtonComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <Button color="primary">Project</Button>
      // <Button color="secondary" size="lg" block onClick='projectPath()'><a href={this.props.url} style={{color: 'white'}} target={'_blank'}>Project</a></Button>
      <div class="flex" onClick='projectPath()'>
        <a href={this.props.url} target={'_blank'} class="bttn">Project</a>
      </div>
    );
  }
}