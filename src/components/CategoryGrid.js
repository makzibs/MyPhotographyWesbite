import './CategoryGrid.css';
import MasonryGrid from './MasonryGrid';

const CategoryGrid = () => {
  // Category names mapping
  const categoryNames = {
    'category1': 'Studio Portraits',
    'category2': 'Sunflower Portraits',
    'category3': 'Dark Ambience',
    'category4': 'Vibrant City',
    'category5': 'Sun and Shade',
    'category6': 'Collections from now and then',
    'category7': 'Lake and Nature',
    'category8': 'Sunset',
    'category9': 'Impromptu Portrait',
    'category10': 'Let kids have fun',
    'category11': 'Creative Shots',
    'category12': 'Wedding Shots',
    'category13': 'Home Food',
    'category15': 'Guys from Pasila street',
    'category16': 'Sunset Portraits',
    'category17': 'Meevan Weaning Ceremony',
    'category18': "Robin's Birthday"
  };
  
  // Cloudinary hero image IDs for each category
  const heroImages = {
    'category1': 'heroImage1',
    'category2': 'heroImage2',
    'category3': 'heroImage3',
    'category4': 'heroImage4',
    'category5': 'heroImage5',
    'category6': 'heroImage6',
    'category7': 'heroImage7',
    'category8': 'heroImage8',
    'category9': 'heroImage9',
    'category10': 'heroImage10',
    'category11': 'heroImage11',
    'category12': 'heroImage12',
    'category13': 'heroImage13',
    'category15': 'heroImage15',
    'category16': 'heroImage16',
    'category17': 'heroImage17',
    'category18': 'heroImage18'
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
