import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo"><Link to="/">MyWebsite</Link></h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/game">Game</Link></li> 
          <li><Link to="/game2">Game2</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
