import React from 'react';
import { Link } from 'react-router-dom';
import CategoryGrid from './CategoryGrid';
import ScrollingText from './ScrollingText';
import './Home.css';

const Home = () => {
  // Landing image
  const landingImage = require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg');

  return (
    <div className="home">
      <div className="landing-image-container">
        <img 
          src={landingImage} 
          alt="Editorial Photography" 
          className="landing-image" 
        />
      </div>
      
      {/* Grid of category thumbnails */}
      <div id="categories">
        <CategoryGrid />
      </div>
      
      {/* Photography quotes and keywords section */}
      <ScrollingText />
      
      <div className="cta-section">
        <h2>LET'S WORK</h2>
        <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
      </div>
    </div>
  );
};

export default Home;
