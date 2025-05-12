import React from 'react';
import MasonryGrid from './MasonryGrid';
import './CategoryGrid.css';

const CategoryGrid = () => {
  // Category names mapping
  const categoryNames = {
    'category1': 'Studio Portraits',
    'category2': 'Sunflower Portraits',
    'category3': 'Dark Ambience',
    'category4': 'Vibrant City',
    'category5': 'Sun and Shade Portraits',
    'category6': 'Collections from now and then',
    'category7': 'Lake and Nature',
    'category8': 'Sunset',
    'category9': 'Impromptu Portrait',
    'category10': 'Let kids have fun',
    'category11': 'Harsh Edits',
    'category12': 'Wedding Shots',
    'category13': 'Home Food',
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
      <MasonryGrid categories={categories} />
    </div>
  );
};

export default CategoryGrid;
