import React from 'react';
import { Row, Col } from 'reactstrap';
import '../App.css';
import Projectcard from '../Components/Projectcard';
import ImageCard from '../Components/Imagediv';



export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

    }s
    render() {
        return (
            <div>
                {/* <Projectcard/>
                <div style={{overflow: 'auto', whiteSpace: 'nowrap', width: '80%', margin: 'auto'}}>
                    <Projectcard/>
                </div>
                <div style={{overflow: 'auto', whiteSpace: 'nowrap', width: '80%', margin: 'auto'}}>
                  <ImageCard/>
                </div> */}
            </div>
        );
    }
}