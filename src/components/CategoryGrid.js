import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';

const CategoryGrid = () => {
  // Category names mapping
  const categoryNames = {
    'category1': 'Portraits',
    'category2': 'Fashion',
    'category3': 'Editorial',
    'category4': 'Product',
    'category5': 'Beauty',
    'category6': 'Lifestyle',
    'category7': 'Travel',
    'category8': 'Landscape',
    'category9': 'Architecture',
    'category10': 'Street',
    'category11': 'Nature',
    'category12': 'Events',
    'category13': 'Wedding',
    'category14': 'Sports',
    'category15': 'Food',
    'category16': 'Black & White',
    'category17': 'Commercial',
    'category18': 'Fine Art'
  };
  
  // Create categories array with proper hero images from each category folder
  const categories = Object.keys(categoryNames).map(categoryId => ({
    id: categoryId,
    name: categoryNames[categoryId],
    heroImage: require(`../assets/images/${categoryId}/heroImage.jpg`)
  }));

  return (
    <div className="category-grid-container">
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <Link to={`/category/${category.id}`} className="category-link">
              <div className="category-image-container">
                <img 
                  src={category.heroImage} 
                  alt={category.name} 
                  className="category-image"
                />
                <div className="category-overlay">
                  <h3 className="category-name">{category.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
