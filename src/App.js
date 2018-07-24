import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import NavbarComp from './Components/Navbar';
import Portfolio from './Pages/Portfolio';
import About from './Pages/AboutMe';
import Contact from './Pages/Contact';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <NavbarComp/>
                <Header/>

                <Route exact path="/" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}
