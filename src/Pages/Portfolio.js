import React from 'react';
import { Row, Col } from 'reactstrap';
import '../App.css';
import Projectcard from '../Components/Projectcard';
import ImageCard from '../Components/Imagediv';
import HorizontalCard from '../Components/HorizontalCard';



export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

    }s
    render() {
        return (
            <div>
                <Row style={{justifyContent: 'center', backgroundColor: '#c5edf9'}}>
                <p><i>Updating Page. To view projects go to About page and click Github icon. Thank you for your patience.</i></p>
                </Row>
                <HorizontalCard/>
                <ImageCard/>
            </div>
        );
    }
}