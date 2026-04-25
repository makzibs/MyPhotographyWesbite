import './CategoryGrid.css';
import MasonryGrid from './MasonryGrid';

const CategoryGrid = () => {
  // Category names mapping
  const categoryNames = {
    'category1': 'Golden Hour Portraits',
    'category2': 'Studio Portraits',
    'category3': 'People Lifestyle',
    'category4': 'Wedding Photography',
    'category5': 'Event Photography',
    'category6': 'All Portraits',
    'category7': 'Cities and Nature'
  };
  
  // Cloudinary hero image IDs for each category
  const heroImages = {
    'category1': 'heroImage1',
    'category2': 'heroImage2',
    'category3': 'heroImage3',
    'category4': 'heroImage4',
    'category5': 'heroImage5',
    'category6': 'heroImage6',
    'category7': 'heroImage7'
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
