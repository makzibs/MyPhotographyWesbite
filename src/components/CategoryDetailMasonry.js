import './MasonryGrid.css';
import ProgressiveImage from './ProgressiveImage';

const CategoryDetailMasonry = ({ images, onImageClick }) => {
  // Determine column count based on number of images
  const getColumnClass = () => {
    const imageCount = images.length;
    if (imageCount === 1) return 'masonry-grid-1col';
    if (imageCount === 2) return 'masonry-grid-2col';
    if (imageCount <= 4) return 'masonry-grid-2col';
    return 'masonry-grid-3col';
  };

  return (
    <div className={`masonry-grid ${getColumnClass()}`}>
      {images.map((image, index) => (
        <div 
          key={image.key || `image-${index}`} 
          className="masonry-item"
        >
          <ProgressiveImage
            src={image.src}
            alt={image.alt}
            className="masonry-image"
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryDetailMasonry;
