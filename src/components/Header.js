import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1 className="logo-text">MAKZIBS <span className="photo-text">photography</span></h1>
        </Link>
      </div>
      
      {/* Hamburger menu button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? (
          <div className="close-icon">
            <span>×</span>
          </div>
        ) : (
          <div className="menu-icon">
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul>
            <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/pricing" onClick={toggleMenu}>PRICING</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>CONTACT</Link></li>
          </ul>
          <div className="mobile-social-icon">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </nav>
      </div>
      
      {/* Desktop navigation */}
      <nav className="desktop-nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/pricing">PRICING</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      
      <div className="social-icon">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="centered-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
