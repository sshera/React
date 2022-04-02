import React, { Component } from 'react';

//Stateless Functional Component

const NavBar = (/* props */ {totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            Navbar
            <span className="badge bg-pill bg-secondary m-2">
                {/* props. */totalCounters}
            </span>
        </a></div></nav>
    );
}

/* class NavBar extends Component { 
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge bg-pill bg-secondary m-2">
                    {this.props.totalCounters}
                </span>
            </a></div></nav>
        );
    }
} */
 
export default NavBar;