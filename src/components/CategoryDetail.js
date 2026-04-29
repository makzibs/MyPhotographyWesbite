import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    category1: 'Outdoor Portraits',
    category2: 'Studio Portraits',
    category3: 'People & Lifestyle',
    category4: 'Weddings',
    category5: 'Events',
    category6: 'All Time Portraits',
    category7: 'Cities and Nature'
  }), []);

  // Local image paths for all categories
  const localImages = useMemo(() => ({
    category1: {
      folder: 'category1-outdoor-portraits',
      heroImage: 'heroImage1.jpg',
      images: ['1.1.jpg', '1.2.jpg', '1.3.jpg', '1.4.jpg', '1.5.jpg', 'DSC09315.jpg', 'DSC09316-2.jpg']
    },
    category2: {
      folder: 'category2-studio-portraits',
      heroImage: 'heroImage2.jpg',
      images: ['2.1.jpg', '2.2.jpg', '2.3.jpg']
    },
    category3: {
      folder: 'category3-people-and-lifestyle',
      heroImage: 'heroImage3.JPG',
      images: ['3.1.JPG', '3.2.JPG', '3.3.jpg', '3.4.jpg', '3.5.jpg', '3.6.jpg', '3.7.jpg', '3.8.jpg', '3.9.jpg', '3.10.jpg', '3.11.jpg', '3.12.jpg', '3.13.jpg', '3.14.jpg', '3.15.jpg']
    },
    category4: {
      folder: 'category4-weddings',
      heroImage: 'heroImage4.jpg',
      images: ['4.4.jpg', '4.5.jpg', '4.7.jpg', '4.9.jpg', '4.10.JPG', '4.11.JPG', '4.12.JPG', '4.13.JPG', 'DSC09118.jpg', 'DSC09402.jpg', 'DSC09408.jpg', 'DSC09435.jpg', 'DSC09450.jpg', 'DSC09466.jpg', 'DSC09467.jpg']
    },
    category5: {
      folder: 'category5-event-photography',
      heroImage: 'heroImage5.jpg',
      images: ['5.1.jpg', '5.2.jpg', '5.3.jpg', '5.4.jpg', '5.5.jpg', '5.6.jpg', '5.7.jpg', '5.8.jpg', '5.9.jpg', '5.10.jpg', '5.11.jpg', '5.12.jpg', '5.13.jpg']
    },
    category6: {
      folder: 'category6-all time portraits',
      heroImage: 'heroImage6.jpg',
      images: ['6.1.jpg', '6.2.jpg', '6.3.jpg', '6.4.jpg', '6.5.jpg', '6.6.jpg', '6.7.jpg', '6.8.jpg']
    },
    category7: {
      folder: 'category7-cities and nature',
      heroImage: 'heroImage7.jpg',
      images: ['7.1.jpg', '7.2.jpg', '7.3.jpg', '7.4.jpg', '7.5.jpg', '7.6.jpg', '7.7.jpg', '7.8.jpg']
    }
  }), []);

  useEffect(() => {
    const loadCategoryImages = () => {
      try {
        setLoading(true);
        
        // Get the display name for this category
        const displayName = categoryNames[categoryId] || categoryId.replace(/^category/, 'Category ');
        setCategoryName(displayName);
        
        // Get local image data for this category
        const categoryData = localImages[categoryId];
        
        if (!categoryData) {
          console.error(`No data found for ${categoryId}`);
          setImages([]);
          setLoading(false);
          return;
        }

        // Build image array with hero image first, then all other images
        const categoryImages = [
          { 
            src: require(`../assets/images/${categoryData.folder}/${categoryData.heroImage}`), 
            alt: `${displayName} Hero`,
            isLocal: true
          },
          ...categoryData.images.map((filename, index) => ({
            src: require(`../assets/images/${categoryData.folder}/${filename}`),
            alt: `${displayName} ${index + 1}`,
            isLocal: true
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
  }, [categoryId, categoryNames, localImages]);

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
            <img 
              src={images[selectedImage].src} 
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
