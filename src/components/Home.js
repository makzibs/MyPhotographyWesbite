import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryGrid from './CategoryGrid';
import ScrollingText from './ScrollingText';
import './Home.css';

const Home = () => {
  // Array of 5 landscape-oriented landing images from MovingImages folder
  const landingImages = [
    require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg'),
    require('../assets/images/MovingImages/53820035969_40ab104e1c_o.jpg'),
    require('../assets/images/MovingImages/53922931484_6fcac6d10c_o.jpg'),
    
  ];

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === landingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? landingImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home">
      <div className="landing-image-container">
        <img 
          src={landingImages[currentImageIndex]} 
          alt={`Editorial Photography ${currentImageIndex + 1}`} 
          className="landing-image" 
        />
        
        <div className="landing-image-controls">
          <button className="landing-nav-button prev-button" onClick={prevImage}>
            &#10094;
          </button>
          <button className="landing-nav-button next-button" onClick={nextImage}>
            &#10095;
          </button>
        </div>
        
        <div className="landing-image-indicators">
          {landingImages.map((_, index) => (
            <span 
              key={index} 
              className={`landing-indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
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
