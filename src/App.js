import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import NavbarComp from './Components/Navbar';
import HorizontalCard from "./Components/HorizontalCard";
import Portfolio from './Pages/Portfolio';
import About from './Pages/AboutMe';
import Contact from './Pages/Contact';
import ImageCard from "./Components/Imagediv";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <NavbarComp/>
                <Header/>
                <HorizontalCard/>
                <ImageCard/>

                <Route exact path="/" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}
