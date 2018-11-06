import * as React from 'react';
import './NavBar.css';
import * as Prysm from '../assets/logos/Prysm.svg';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="container navbar">
    <img alt="logo" className="navbar-logo" src={Prysm} />
    
    <div className="navbar-links">
      <Link to="/">
        <span className="navbar-item">Home</span>
      </Link>
      <Link to="/faq">
        <span className="navbar-item">FAQ</span>
      </Link>
      <a href="http://github.com/prysmaticlabs/geth-sharding">
        <span className="navbar-item">Github</span>
      </a>      
      <a href="https://medium.com/prysmatic-labs">
        <span className="navbar-item">Blog</span>
      </a>
      <a href="https://twitter.com/prylabs">
        <span className="navbar-item">Twitter</span>
      </a>
      <a href="http://gitter.im/prysmaticlabs/geth-sharding?source=orgpage">
        <span className="navbar-item">Gitter</span>
      </a>
    </div>
  </div>
);

export default NavBar;