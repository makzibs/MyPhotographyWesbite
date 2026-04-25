import React from 'react';
import { Link } from 'react-router-dom';
import CategoryGrid from './CategoryGrid';
import ScrollingText from './ScrollingText';
import './CategoryGrid.css';

const CategoriesGrid = () => {
  return (
    <div className="categories-grid-container">
      <CategoryGrid />
      
      {/* Photography quotes and keywords section */}
      <ScrollingText />
      
      <div className="cta-section">
        <h2>LET'S WORK</h2>
        <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
      </div>
    </div>
  );
};

export default CategoriesGrid;
