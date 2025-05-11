import React, { useState, useEffect } from 'react';
import './MasonryGrid.css';

const CategoryDetailMasonry = ({ images, onImageClick }) => {
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
    
    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push({ ...image, index });
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
          {column.map((image) => (
            <div 
              key={image.key || `image-${image.index}`} 
              className="masonry-item"
              onClick={() => onImageClick(image.index)}
            >
              <div className="masonry-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="masonry-image"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryDetailMasonry;
