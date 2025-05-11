import React from 'react';
import './About.css';

const About = () => {
  // Import the image properly using require
  const portraitImage = require('../assets/images/Photographer-Images/Portrait-BW.jpg');
  
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={portraitImage} alt="MAKZIBS" />
        </div>
        
        <div className="about-text-section">
          <h1 className="about-name">MAKZIBS <span className="about-lastname">PHOTOGRAPHY</span></h1>
          
          <div className="about-specialties">
            PHOTOGRAPHY | CREATIVE DIRECTION | SOFTWARE ENGINEERING
          </div>
          
          <div className="about-bio">
            <p className="about-headline">
              I've spent the last 10+ years behind the lens as a enthusiast photographer.
            </p>
            
            <p className="about-description">
              It's my calling to create original, creative solutions for every client need. I
              specialize in look books, custom content creation, and overall branding.
            </p>
            
            <p className="about-description">
              Beyond photography, I'm also a software engineer with a deep passion for filmmaking and visual arts.
              This unique combination allows me to bring technical precision and artistic vision to every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
