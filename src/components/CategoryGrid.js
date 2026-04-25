import './CategoryGrid.css';
import MasonryGrid from './MasonryGrid';

const CategoryGrid = () => {
  // Category names mapping
  const categoryNames = {
    'category1': 'Golden Hour Portraits',
    'category2': 'Studio Portraits',
    'category3': 'Family & Lifestyle',
    'category4': 'Wedding Photography',
    'category5': 'Event Photography',
    'category6': 'Creative Portraits'
  };
  
  // Cloudinary hero image IDs for each category
  const heroImages = {
    'category1': 'heroImage2',
    'category2': 'heroImage1',
    'category3': 'heroImage9',
    'category4': 'heroImage12',
    'category5': 'heroImage17',
    'category6': 'heroImage11'
  };
  
  // Create categories array with Cloudinary hero images
  const categories = Object.keys(categoryNames).map(categoryId => ({
    id: categoryId,
    name: categoryNames[categoryId],
    heroImage: heroImages[categoryId]
  }));

  return (
    <div className="category-grid-container">
      <MasonryGrid categories={categories} />
    </div>
  );
};

export default CategoryGrid;
