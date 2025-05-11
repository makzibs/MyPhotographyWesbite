import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; {currentYear} MAKZIBS PHOTOGRAPHY</p>
      </div>
    </footer>
  );
};

export default Footer;
