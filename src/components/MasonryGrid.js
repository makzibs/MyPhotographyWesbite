import React from 'react';
import { Link } from 'react-router-dom';
import './MasonryGrid.css';
import ProgressiveImage from './ProgressiveImage';

const MasonryGrid = ({ categories }) => {
  return (
    <div className="masonry-grid">
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`} className="masonry-item">
          <ProgressiveImage
            src={category.heroImage}
            alt={category.name}
            className="masonry-image"
          />
          <div className="masonry-overlay">
            <h3 className="masonry-title">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MasonryGrid;
