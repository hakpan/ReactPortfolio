import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import JumboComp from './Components/Jumbotron.js';
import Portfolio from './Pages/Portfolio.js';
import About from './Pages/AboutMe.js';
import Contact from './Pages/Contact.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <JumboComp/>

                <Route exact path="/" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}