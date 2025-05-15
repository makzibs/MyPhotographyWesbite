import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    'category14': 'Quick Family portrait',
    'category15': 'Guys from Pasila street',
    'category16': 'Sunset Portraits',
    'category17': 'Meevan Weaning Ceremony',
    'category18': "Robin's Birthday"
  };

  useEffect(() => {
    // Function to load images for the selected category
    const loadCategoryImages = () => {
      try {
        setLoading(true);
        
        // Get the display name for this category
        const displayName = categoryNames[categoryId] || categoryId.replace(/^category/, 'Category ');
        setCategoryName(displayName);
        
        // Import images directly without using safeImport
        // Hard-coded image paths for each category
        let categoryImages = [];
        
        // Based on the category ID, create the appropriate image array
        switch(categoryId) {
          case 'category1':
            categoryImages = [
              { src: require('../assets/images/category1/heroImage.jpg'), alt: 'Studio Portraits Hero' },
              { src: require('../assets/images/category1/1.1.jpg'), alt: 'Studio Portrait 1' },
              { src: require('../assets/images/category1/1.2.jpg'), alt: 'Studio Portrait 2' },
              { src: require('../assets/images/category1/1.3.jpg'), alt: 'Studio Portrait 3' },
              { src: require('../assets/images/category1/1.4.jpg'), alt: 'Studio Portrait 4' },
              { src: require('../assets/images/category1/1.5.jpg'), alt: 'Studio Portrait 5' }
            ];
            break;
          case 'category2':
            categoryImages = [
              { src: require('../assets/images/category2/heroImage.jpg'), alt: 'Sunflower Portraits Hero' },
              { src: require('../assets/images/category2/2.1.jpg'), alt: 'Sunflower Portrait 1' },
              { src: require('../assets/images/category2/2.2.jpg'), alt: 'Sunflower Portrait 2' },
              { src: require('../assets/images/category2/2.3.jpg'), alt: 'Sunflower Portrait 3' }
            ];
            break;
          case 'category3':
            categoryImages = [
              { src: require('../assets/images/category3/heroImage.jpg'), alt: 'Dark Ambience Hero' },
              { src: require('../assets/images/category3/3.1.jpg'), alt: 'Dark Ambience 1' },
              { src: require('../assets/images/category3/3.2.jpg'), alt: 'Dark Ambience 2' },
              { src: require('../assets/images/category3/3.3.jpg'), alt: 'Dark Ambience 3' }
            ];
            break;
          case 'category4':
            try {
              categoryImages = [
                { src: require('../assets/images/category4/heroImage.jpg'), alt: 'Vibrant City Hero' },
                { src: require('../assets/images/category4/4.1.jpg'), alt: 'Vibrant City 1' },
                { src: require('../assets/images/category4/4.2.jpg'), alt: 'Vibrant City 2' },
                { src: require('../assets/images/category4/4.3.jpg'), alt: 'Vibrant City 3' },
                { src: require('../assets/images/category4/4.4.jpg'), alt: 'Vibrant City 4' },
                { src: require('../assets/images/category4/4.5.jpg'), alt: 'Vibrant City 5' },
                { src: require('../assets/images/category4/4.6.jpg'), alt: 'Vibrant City 6' },
                { src: require('../assets/images/category4/4.7.jpg'), alt: 'Vibrant City 7' },
                { src: require('../assets/images/category4/4.8.jpg'), alt: 'Vibrant City 8' },
                { src: require('../assets/images/category4/4.9.jpg'), alt: 'Vibrant City 9' }
              ];
               
            } catch (error) {
              console.error('Error loading category4 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category5':
            try {
              categoryImages = [
                { src: require('../assets/images/category5/heroImage.jpg'), alt: 'Sunny Portraits Hero' },
                { src: require('../assets/images/category5/5.1.jpg'), alt: 'Sunny Portrait 1' },
                { src: require('../assets/images/category5/5.2.jpg'), alt: 'Sunny Portrait 2' },
                { src: require('../assets/images/category5/5.3.jpg'), alt: 'Sunny Portrait 3' },
                { src: require('../assets/images/category5/5.4.jpg'), alt: 'Sunny Portrait 4' },
                { src: require('../assets/images/category5/5.5.jpg'), alt: 'Sunny Portrait 5' }
              ];
            } catch (error) {
              console.error('Error loading category5 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category6':
            try {
              categoryImages = [
                { src: require('../assets/images/category6/heroImage.jpg'), alt: 'Collections from now and then Hero' },
                { src: require('../assets/images/category6/6.1.jpg'), alt: 'Collection 1' },
                { src: require('../assets/images/category6/6.2.jpg'), alt: 'Collection 2' },
                { src: require('../assets/images/category6/6.3.jpg'), alt: 'Collection 3' },
                { src: require('../assets/images/category6/6.4.jpg'), alt: 'Collection 4' },
                { src: require('../assets/images/category6/6.5.jpg'), alt: 'Collection 5' },
                { src: require('../assets/images/category6/6.6.jpg'), alt: 'Collection 6' },
                { src: require('../assets/images/category6/6.7.jpg'), alt: 'Collection 7' },
                { src: require('../assets/images/category6/6.8.jpg'), alt: 'Collection 8' },
                { src: require('../assets/images/category6/6.9.jpg'), alt: 'Collection 9' },
                { src: require('../assets/images/category6/6.10.jpg'), alt: 'Collection 10' }
              ];
            } catch (error) {
              console.error('Error loading category6 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category7':
            try {
              categoryImages = [
                { src: require('../assets/images/category7/heroImage.jpg'), alt: 'Lake and Nature Hero' },
                { src: require('../assets/images/category7/7.1.jpg'), alt: 'Lake and Nature 1' },
                { src: require('../assets/images/category7/7.2.jpg'), alt: 'Lake and Nature 2', },
                { src: require('../assets/images/category7/7.3.jpg'), alt: 'Lake and Nature 3' }
              ];
            } catch (error) {
              console.error('Error loading category7 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category8':
            try {
              categoryImages = [
                { src: require('../assets/images/category8/heroImage.jpg'), alt: 'Sunset Hero' },
                { src: require('../assets/images/category8/8.1.jpg'), alt: 'Sunset 1' },
                { src: require('../assets/images/category8/8.2.jpg'), alt: 'Sunset 2' }
              ];
            } catch (error) {
              console.error('Error loading category8 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category9':
            try {
              categoryImages = [
                { src: require('../assets/images/category9/heroImage.jpg'), alt: 'Impromptu Portrait Hero' },
                { src: require('../assets/images/category9/9.1.jpg'), alt: 'Impromptu Portrait 1' }
              ];
            } catch (error) {
              console.error('Error loading category9 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category10':
            try {
              categoryImages = [
                { src: require('../assets/images/category10/heroImage.jpg'), alt: 'Let kids have fun Hero' },
                { src: require('../assets/images/category10/10.1.jpg'), alt: 'Kids having fun 1' }
              ];
            } catch (error) {
              console.error('Error loading category10 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category11':
            try {
              categoryImages = [
                { src: require('../assets/images/category11/heroImage.jpg'), alt: 'Creative Shots Hero' },
                { src: require('../assets/images/category11/11.1.jpg'), alt: 'Creative Shot 1' },
                { src: require('../assets/images/category11/11.2.jpg'), alt: 'Creative Shot 2' }
                
              ];
            } catch (error) {
              console.error('Error loading category11 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category12':
            try {
              categoryImages = [
                { src: require('../assets/images/category12/heroImage.jpg'), alt: 'Wedding Shots Hero' },
                { src: require('../assets/images/category12/12.1.jpg'), alt: 'Wedding Shots 1' },
                { src: require('../assets/images/category12/12.2.jpg'), alt: 'Wedding Shots 2' },
                { src: require('../assets/images/category12/12.3.jpg'), alt: 'Wedding Shots 3' },
                { src: require('../assets/images/category12/12.4.jpg'), alt: 'Wedding Shots 4' }
              ];
            } catch (error) {
              console.error('Error loading category12 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category13':
            try {
              categoryImages = [
                { src: require('../assets/images/category13/heroImage.jpg'), alt: 'Home Food Hero' },
                { src: require('../assets/images/category13/13.1.jpg'), alt: 'Home Food 1' },
                { src: require('../assets/images/category13/13.2.jpg'), alt: 'Home Food 2' }
              ];
            } catch (error) {
              console.error('Error loading category13 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category14':
            try {
              categoryImages = [
                { src: require('../assets/images/category14/heroImage.jpg'), alt: 'Quick Family portrait Hero' },
                { src: require('../assets/images/category14/14.1.jpg'), alt: 'Quick Family portrait 1' }
              ];
            } catch (error) {
              console.error('Error loading category14 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category15':
            try {
              categoryImages = [
                { src: require('../assets/images/category15/heroImage.jpg'), alt: 'Guys in Pasila street Hero' },
                { src: require('../assets/images/category15/15.1.jpg'), alt: 'Guys in Pasila street 1' },
                { src: require('../assets/images/category15/15.2.jpg'), alt: 'Guys in Pasila street 2' }
              ];
            } catch (error) {
              console.error('Error loading category15 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category16':
            try {
              categoryImages = [
                { src: require('../assets/images/category16/heroImage.jpg'), alt: 'Sunset Portraits Hero' },
                { src: require('../assets/images/category16/16.1.jpg'), alt: 'Sunset Portrait 1' },
                { src: require('../assets/images/category16/16.2.jpg'), alt: 'Sunset Portrait 2' },
                { src: require('../assets/images/category16/16.3.jpg'), alt: 'Sunset Portrait 3' },
                { src: require('../assets/images/category16/16.4.jpg'), alt: 'Sunset Portrait 4' }
              ];
            } catch (error) {
              console.error('Error loading category16 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category17':
            try {
              categoryImages = [
                { src: require('../assets/images/category17/heroImage.jpg'), alt: 'Meevan Weaning Ceremony Hero' },
                { src: require('../assets/images/category17/17.1.jpg'), alt: 'Meevan Weaning Ceremony 1' },
                { src: require('../assets/images/category17/17.2.jpg'), alt: 'Meevan Weaning Ceremony 2' },
                { src: require('../assets/images/category17/17.3.jpg'), alt: 'Meevan Weaning Ceremony 3' },
                { src: require('../assets/images/category17/17.4.jpg'), alt: 'Meevan Weaning Ceremony 4' }
              ];
            } catch (error) {
              console.error('Error loading category17 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category18':
            try {
              categoryImages = [
                { src: require('../assets/images/category18/heroImage.jpg'), alt: "Robin's Birthday Hero" },
                { src: require('../assets/images/category18/18.1.jpg'), alt: "Robin's Birthday 1" },
                { src: require('../assets/images/category18/18.2.jpg'), alt: "Robin's Birthday 2" },
                { src: require('../assets/images/category18/18.3.jpg'), alt: "Robin's Birthday 3" },
                { src: require('../assets/images/category18/18.4.jpg'), alt: "Robin's Birthday 4" }
              ];
            } catch (error) {
              console.error('Error loading category18 images:', error);
              categoryImages = [
                { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
                { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
              ];
            }
            break;
          default:
            // Fallback to category1 images if the category is not found
            categoryImages = [
              { src: require('../assets/images/category1/1.1.jpg'), alt: 'Fallback 1' },
              { src: require('../assets/images/category1/1.2.jpg'), alt: 'Fallback 2' }
            ];
        }
        
        // Add a key to each image object
        categoryImages = categoryImages.map((img, index) => ({
          ...img,
          key: `${categoryId}-image-${index}`
        }));
        
        setImages(categoryImages);
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
        setImages([]);
      }
    };

    loadCategoryImages();
  }, [categoryId]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowHeader(false); // Hide header when viewing an image
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
    setShowHeader(true); // Show header again when closing image view
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
