import React from 'react';
import { Jumbotron } from 'reactstrap';
import img from '../Images/heroHeader.svg';


export default class Header extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (

      <div>
        <Jumbotron style={{backgroundColor: '#ffffff', padding: '0px'}}>
          <img src={img} alt='background'/>
        </Jumbotron>
      </div>
        
      );
    }
  }