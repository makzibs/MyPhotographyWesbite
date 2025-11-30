import CLDBlurImage from './Image';
import './MasonryGrid.css';

const CategoryDetailMasonry = ({ images, onImageClick }) => {
  return (
    <div className="masonry-grid">
      {images.map((image, index) => (
        <div 
          key={image.key || `image-${index}`} 
          className="masonry-item"
          onClick={() => onImageClick(index)}
        >
          {/* <img 
            src={image.src} 
            alt={image.alt} 
            className="masonry-image"
          /> */}

          <CLDBlurImage 
            publicId={image.src} 
            alt={image.alt} 
            className="masonry-image"
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryDetailMasonry;
