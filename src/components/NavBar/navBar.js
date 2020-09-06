import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div >
            <div className="NavMain" bg="dark" >
            <a id="navTitle" href = "https://www.wonsulting.com/">
            WONSULTING
            </a>            
            <a href="/" id="navLink">Home</a>
            <a href="/faq" id="navLink">Learn More</a>
            <a href="/resume" id="navLink">Get Started</a>
            </div>
            </div>
        );
    }
}

export default NavBar;