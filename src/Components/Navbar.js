import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardHeader, CardFooter, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row,
    Col, Jumbotron, Button } from 'reactstrap';

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
        <Navbar color="faded" light expand="md" id="Navbar">
            {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
  }
}

export default NavbarComp;