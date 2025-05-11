import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1 className="logo-text">MAKZIBS<span className="in-text">in</span><span className="photo-text">photo</span></h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/pricing">PRICING</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <div className="social-icon">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
