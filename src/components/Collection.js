import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Collection.css';

// Collection definitions with direct image imports from MovingImages folder
const collections = {
  portrait: {
    title: 'Portrait Photography',
    description: 'Capturing the essence and personality of individuals.',
    images: [
      { src: require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg'), alt: 'Portrait 1' },
      { src: require('../assets/images/MovingImages/53845485306_07fe039bd2_o.jpg'), alt: 'Portrait 2' },
      { src: require('../assets/images/MovingImages/54498392218_fe9d53736e_o.jpg'), alt: 'Portrait 3' },
      { src: require('../assets/images/MovingImages/53819696436_1757c677f9_o.jpg'), alt: 'Portrait 4' }
    ]
  },
  fashion: {
    title: 'Fashion Photography',
    description: 'Showcasing style, clothing, and accessories in artistic settings.',
    images: [
      { src: require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg'), alt: 'Fashion 1' },
      { src: require('../assets/images/MovingImages/53845485306_07fe039bd2_o.jpg'), alt: 'Fashion 2' },
      { src: require('../assets/images/MovingImages/54498392218_fe9d53736e_o.jpg'), alt: 'Fashion 3' },
      { src: require('../assets/images/MovingImages/53819696436_1757c677f9_o.jpg'), alt: 'Fashion 4' }
    ]
  },
  product: {
    title: 'Product Photography',
    description: 'Highlighting products with clean, professional imagery.',
    images: [
      { src: require('../assets/images/MovingImages/53847717829_9a715bbf14_o.jpg'), alt: 'Product 1' },
      { src: require('../assets/images/MovingImages/54470758702_8002772714_o.jpg'), alt: 'Product 2' },
      { src: require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg'), alt: 'Product 3' },
      { src: require('../assets/images/MovingImages/53845485306_07fe039bd2_o.jpg'), alt: 'Product 4' }
    ]
  },
  beauty: {
    title: 'Beauty Photography',
    description: 'Capturing the art of makeup, skincare, and beauty products.',
    images: [
      { src: require('../assets/images/MovingImages/53820035969_40ab104e1c_o.jpg'), alt: 'Beauty 1' },
      { src: require('../assets/images/MovingImages/54489761013_b2189bb4ef_o.jpg'), alt: 'Beauty 2' },
      { src: require('../assets/images/MovingImages/54472156533_2f1ac7312d_o.jpg'), alt: 'Beauty 3' },
      { src: require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg'), alt: 'Beauty 4' }
    ]
  },
  lifestyle: {
    title: 'Lifestyle Photography',
    description: 'Authentic moments capturing everyday life and experiences.',
    images: [
      { src: require('../assets/images/MovingImages/53922931484_6fcac6d10c_o.jpg'), alt: 'Lifestyle 1' },
      { src: require('../assets/images/MovingImages/54498392218_fe9d53736e_o.jpg'), alt: 'Lifestyle 2' },
      { src: require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg'), alt: 'Lifestyle 3' },
      { src: require('../assets/images/MovingImages/53845485306_07fe039bd2_o.jpg'), alt: 'Lifestyle 4' }
    ]
  },
  editorial: {
    title: 'Editorial Photography',
    description: 'Storytelling through images for magazines and publications.',
    images: [
      { src: require('../assets/images/MovingImages/53922580726_ec284411c9_o.jpg'), alt: 'Editorial 1' },
      { src: require('../assets/images/MovingImages/54484692459_2220bdd794_o.jpg'), alt: 'Editorial 2' },
      { src: require('../assets/images/MovingImages/53845485306_07fe039bd2_o.jpg'), alt: 'Editorial 3' },
      { src: require('../assets/images/MovingImages/54498392218_fe9d53736e_o.jpg'), alt: 'Editorial 4' }
    ]
  }
};

const Collection = () => {
  const { type } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const collection = collections[type];
  
  if (!collection) {
    return (
      <div className="collection-page">
        <h2>Collection Not Found</h2>
        <p>Sorry, the collection you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else {
      setSelectedImage(collection.images.length - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage < collection.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const closeImageView = () => {
    setSelectedImage(null);
  };

  return (
    <div className="collection-page">
      <div className="collection-header">
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
      </div>
      
      <div className="collection-grid">
        {collection.images.map((image, index) => (
          <div key={index} className="collection-item" onClick={() => handleImageClick(index)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      
      {selectedImage !== null && (
        <div className="fullscreen-image-view">
          <div className="fullscreen-overlay" onClick={closeImageView}></div>
          <div className="fullscreen-image-container">
            <button className="nav-button prev-button" onClick={handlePrevImage}>
              &#10094;
            </button>
            <img 
              src={collection.images[selectedImage].src} 
              alt={collection.images[selectedImage].alt} 
              className="fullscreen-image"
            />
            <button className="nav-button next-button" onClick={handleNextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
      
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default Collection;
