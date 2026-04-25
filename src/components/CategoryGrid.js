import './CategoryGrid.css';
import MasonryGrid from './MasonryGrid';
import hero1 from '../assets/images/category1-golden-hour-portraits/heroImage1.jpg';
import hero2 from '../assets/images/category2-studio-portraits/heroImage2.jpg';
import hero3 from '../assets/images/category3-people & lifestyle/heroImage14.jpg';
import hero4 from '../assets/images/category4-wedding/heroImage4.jpg';
import hero5 from '../assets/images/category5-event-photography/heroImage5.jpg';
import hero6 from '../assets/images/category6-all time portraits/heroImage6.jpg';
import hero7 from '../assets/images/category7-cities and nature/heroImage7.jpg';

const CategoryGrid = () => {
  // Category names mapping
  const categoryNames = {
    'category1': 'Golden Hour Portraits',
    'category2': 'Studio Portraits',
    'category3': 'People & Lifestyle',
    'category4': 'Wedding',
    'category5': 'Event Photography',
    'category6': 'All Time Portraits',
    'category7': 'Cities and Nature'
  };
  
  // Local hero images for each category
  const heroImages = {
    'category1': hero1,
    'category2': hero2,
    'category3': hero3,
    'category4': hero4,
    'category5': hero5,
    'category6': hero6,
    'category7': hero7
  };
  
  // Create categories array with local hero images
  const categories = Object.keys(categoryNames).map(categoryId => ({
    id: categoryId,
    name: categoryNames[categoryId],
    heroImage: heroImages[categoryId],
    isLocal: true
  }));

  return (
    <div className="category-grid-container">
      <MasonryGrid categories={categories} />
    </div>
  );
};

export default CategoryGrid;
