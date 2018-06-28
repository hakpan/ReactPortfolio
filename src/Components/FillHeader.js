import React from 'react';
import './Header.css';
import img from '../Images/heatherheader.svg';


export default class FillHeader extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
        <img class="fill" src={img} alt='background'/>
        </div>
      );
    }
  }