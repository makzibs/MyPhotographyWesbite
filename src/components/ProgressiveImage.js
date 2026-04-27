import { useState, useEffect } from 'react';
import './ProgressiveImage.css';

const ProgressiveImage = ({ src, alt, className, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  return (
    <div className={`progressive-image-wrapper ${className || ''}`} onClick={onClick}>
      {isLoading && !hasError && (
        <div className="progressive-image-placeholder">
          <div className="progressive-image-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`progressive-image ${isLoading ? 'loading' : 'loaded'}`}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
};

export default ProgressiveImage;
