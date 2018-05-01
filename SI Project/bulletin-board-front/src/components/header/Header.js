import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logo.png';
import * as FaIconPack from 'react-icons/lib/fa'

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul id="menu">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/help'>Help</Link></li>
              <li className="right"><Link to='/preferences'><FaIconPack.FaCog/></Link></li>
              <li className="right"><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
