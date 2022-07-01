import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);   // 如果不用這行，toggleNavbar函數就要改成箭頭函數
    this.state = {
      collapsed: true
    };
  }
    // 運用箭頭函數的方法就不用加上this.toggleNavbar = this.toggleNavbar.bind(this);
    //toggleNavbar = () => {
    //    this.setState({
    //        collapsed: !this.state.collapsed
    //    });
    //    console.log(this.state.collapsed);
    //}
  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/frontend">React_Northwind</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/frontend">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/frontend/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/frontend/fetch-data">Fetch data</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
