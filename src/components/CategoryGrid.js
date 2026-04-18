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
    'category1': 'heroImage_ff71wp',
    'category2': 'heroImage_nn8ese',
    'category3': 'heroImage_a4oqtm',
    'category4': 'heroImage_wdvsq6',
    'category5': 'heroImage_uqzpeu',
    'category6': 'heroImage_ncz8lv',
    'category7': 'heroImage_emhaom',
    'category8': 'heroImage_s2pkna',
    'category9': 'heroImage_wl9nzk',
    'category10': 'heroImage_yq7p8o',
    'category11': 'heroImage_gqibxa',
    'category12': 'heroImage_lktku1',
    'category13': 'heroImage_vyixzg',
    'category15': 'heroImage_jowgqh',
    'category16': 'heroImage_ff71wp',
    'category17': 'heroImage_nn8ese',
    'category18': 'heroImage_u8jvq7'
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
