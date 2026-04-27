import { useState } from 'react';
import './ProgressiveImage.css';

const ProgressiveImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`progressive-image-wrapper ${className || ''}`} onClick={onClick}>
      {!isLoaded && (
        <div className="progressive-image-placeholder">
          <div className="progressive-image-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`progressive-image ${isLoaded ? 'loaded' : 'loading'}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default ProgressiveImage;
