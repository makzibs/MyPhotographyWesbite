import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';

const CategoryGrid = () => {
  // Category names mapping
  const categoryNames = {
    'category1': 'Studio Portraits',
    'category2': 'Sunflower Portraits',
    'category3': 'Dark Ambience',
    'category4': 'Vibrant City',
    'category5': 'Sunny Portraits',
    'category6': 'Collections from now and then',
    'category7': 'Lake and Nature',
    'category8': 'Sunset',
    'category9': 'Impromptu Portrait',
    'category10': 'Let kids have fun',
    'category11': 'Harsh Edits',
    'category12': 'Wedding Shots',
    'category13': 'Home Food',
    'category14': 'Quick Family portrait',
    'category15': 'Guys in Pasila street',
    'category16': 'Sunset Portraits',
    'category17': 'Meevan Weaning Ceremony',
    'category18': "Robin's Birthday"
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
