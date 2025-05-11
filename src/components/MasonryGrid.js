import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MasonryGrid.css';

const MasonryGrid = ({ categories }) => {
  const [columnCount, setColumnCount] = useState(3);
  
  // Determine column count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setColumnCount(3);
      } else if (window.innerWidth >= 768) {
        setColumnCount(2);
      } else {
        setColumnCount(1);
      }
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Distribute items into columns
  const getColumnsData = () => {
    const columns = Array.from({ length: columnCount }, () => []);
    
    categories.forEach((category, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(category);
    });
    
    return columns;
  };
  
  return (
    <div className="masonry-grid">
      {getColumnsData().map((column, columnIndex) => (
        <div 
          key={`column-${columnIndex}`} 
          className="masonry-column" 
          style={{ width: `${100 / columnCount}%` }}
        >
          {column.map((category) => (
            <div key={category.id} className="masonry-item">
              <Link to={`/category/${category.id}`}>
                <div className="masonry-image-container">
                  <img 
                    src={category.heroImage} 
                    alt={category.name} 
                    className="masonry-image"
                  />
                  <div className="masonry-overlay">
                    <h3 className="masonry-title">{category.name}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
