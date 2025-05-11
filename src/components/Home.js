import React from 'react';
import { Link } from 'react-router-dom';
import CategoryGrid from './CategoryGrid';
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
      
      <div className="as-seen-in">
        <div className="as-seen-text">AS SEEN IN AS SEEN IN AS SEEN IN AS SEEN IN</div>
        <div className="brand-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Vanity_Fair_Logo.svg/1280px-Vanity_Fair_Logo.svg.png" alt="Vanity Fair" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/People_logo.svg/1280px-People_logo.svg.png" alt="People" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/1280px-Target_logo.svg.png" alt="Target" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Glamour_logo.svg/1280px-Glamour_logo.svg.png" alt="Glamour" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Forbes_logo.svg/1280px-Forbes_logo.svg.png" alt="Forbes" />
        </div>
      </div>
      
      <div className="cta-section">
        <h2>LET'S WORK</h2>
        <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
      </div>
    </div>
  );
};

export default Home;
