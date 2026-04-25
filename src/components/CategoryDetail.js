import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CLDBlurImage from './Image';
import './CategoryDetail.css';
import CategoryDetailMasonry from './CategoryDetailMasonry';

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [images, setImages] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showHeader, setShowHeader] = useState(true);

  // Map of category IDs to display names
  const categoryNames = useMemo(() => ({
    category1: 'Golden Hour Portraits',
    category2: 'Studio Portraits',
    category3: 'People Lifestyle',
    category4: 'Wedding Photography',
    category5: 'Event Photography',
    category6: 'All Portraits',
    category7: 'Cities and Nature'
  }), []);

  // Cloudinary public IDs for all categories
  const cloudinaryIds = useMemo(() => ({
    category1: {
      heroImage: 'heroImage1?v=2',
      images: ['1.1', '1.2', '1.3', '1.4', '1.5']
    },
    category2: {
      heroImage: 'heroImage2?v=2',
      images: ['2.1', '2.2', '2.3']
    },
    category3: {
      heroImage: 'heroImage3?v=2',
      images: ['2.3', '2.4', '6.8', '8.1', '8.2', '10.1', '14.1', '15.1', '16.4']
    },
    category4: {
      heroImage: 'heroImage4?v=2',
      images: ['4.1', '4.2', '4.4', '4.5', '4.6', '4.7', '4.8']
    },
    category5: {
      heroImage: 'heroImage5?v=2',
      images: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7']
    },
    category6: {
      heroImage: 'heroImage6?v=2',
      images: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.7', '6.10']
    },
    category7: {
      heroImage: 'heroImage7?v=2',
      images: ['7.4', '7.5']
    }
  }), []);

  useEffect(() => {
    const loadCategoryImages = () => {
      try {
        setLoading(true);
        
        // Get the display name for this category
        const displayName = categoryNames[categoryId] || categoryId.replace(/^category/, 'Category ');
        setCategoryName(displayName);
        
        // Get Cloudinary IDs for this category
        const categoryData = cloudinaryIds[categoryId];
        
        if (!categoryData) {
          console.error(`No data found for ${categoryId}`);
          setImages([]);
          setLoading(false);
          return;
        }

        // Build image array with hero image first, then all other images
        const categoryImages = [
          { src: categoryData.heroImage, alt: `${displayName} Hero` },
          ...categoryData.images.map((publicId, index) => ({
            src: publicId,
            alt: `${displayName} ${index + 1}`
          }))
        ];
        
        // Add a key to each image object
        const imagesWithKeys = categoryImages.map((img, index) => ({
          ...img,
          key: `${categoryId}-image-${index}`
        }));
        
        setImages(imagesWithKeys);
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
        setImages([]);
      }
    };

    loadCategoryImages();
  }, [categoryId, categoryNames, cloudinaryIds]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowHeader(false);
  };

  const handlePrevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else {
      setSelectedImage(images.length - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const closeImageView = () => {
    setSelectedImage(null);
    setShowHeader(true);
  };

  if (loading) {
    return <div className="loading">Loading images...</div>;
  }

  return (
    <div className="category-detail">
      {showHeader && (
        <div className="category-header">
          <h1>{categoryName}</h1>
          <Link to="/categories" className="back-link">Back to Categories</Link>
        </div>
      )}
      
      <CategoryDetailMasonry 
        images={images} 
        onImageClick={handleImageClick} 
      />
      
      {selectedImage !== null && (
        <div className="fullscreen-view">
          <div className="fullscreen-overlay" onClick={closeImageView}></div>
          <div className="fullscreen-container">
            <button className="nav-button prev-button" onClick={handlePrevImage}>
              &#10094;
            </button>
            <CLDBlurImage 
              publicId={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="fullscreen-image"
            />
            <button className="nav-button next-button" onClick={handleNextImage}>
              &#10095;
            </button>
            <button className="close-button" onClick={closeImageView}>
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
