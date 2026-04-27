import { useState, useEffect } from 'react';
import './ProgressiveImage.css';

const ProgressiveImage = ({ src, alt, className, onClick }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`progressive-image-wrapper ${className || ''}`} onClick={onClick}>
      {isLoading && (
        <div className="progressive-image-placeholder">
          <div className="progressive-image-spinner"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`progressive-image ${isLoading ? 'loading' : 'loaded'}`}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
};

export default ProgressiveImage;
