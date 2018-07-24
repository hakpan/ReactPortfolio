import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, NavbarBrand, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Img from '../Images/HALogo.svg';
import './Navbar.css';

class NavbarComp extends React.Component {
  constructor(props) {
    super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
            };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
  }
  render() {
    return (
        <Navbar color="faded" light expand="md" id="Navbar" style={{backgroundColor: '#c5edf9'}}>
            <NavbarBrand href="/"><img src={Img} alt='Heather Akpan Logo'style={{width: '40px', height: '40px'}}/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem style={{paddingRight: '20px'}}>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem style={{paddingRight: '20px'}}>
                        <NavLink href="/">Portfolio</NavLink>
                    </NavItem>
                    <NavItem style={{paddingRight: '20px'}}>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
  }
}

export default NavbarComp;