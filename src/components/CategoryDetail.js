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
  }), []);

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
            // categoryImages = [
            //   { src: 'https://res.cloudinary.com/dtbxzwwfj/image/upload/v1764215713/heroImage_lqf6w3.jpg', alt: 'Studio Portraits Hero' },
            //   { src: 'https://res.cloudinary.com/dtbxzwwfj/image/upload/v1764215710/1.1_jp7lzd.jpg', alt: 'Studio Portrait 1' },
            //   { src: 'https://res.cloudinary.com/dtbxzwwfj/image/upload/v1764215710/1.2_yjm1dg.jpg', alt: 'Studio Portrait 2' },
            //   { src: 'https://res.cloudinary.com/dtbxzwwfj/image/upload/v1764215712/1.3_jaxpqz.jpg', alt: 'Studio Portrait 3' },
            //   { src: 'https://res.cloudinary.com/dtbxzwwfj/image/upload/v1764215711/1.4_duc0a9.jpg', alt: 'Studio Portrait 4' },
            //   { src: 'https://res.cloudinary.com/dtbxzwwfj/image/upload/v1764215713/1.5_umcibb.jpg', alt: 'Studio Portrait 5' }
            // ];
            categoryImages = [
              { src: 'heroImage_lqf6w3', alt: 'Studio Portraits Hero' },
              { src: '1.1_jp7lzd', alt: 'Studio Portrait 1' },
              { src: '1.2_yjm1dg', alt: 'Studio Portrait 2' },
              { src: '1.3_jaxpqz', alt: 'Studio Portrait 3' },
              { src: '1.4_duc0a9', alt: 'Studio Portrait 4' },
              { src: '1.5_umcibb', alt: 'Studio Portrait 5' }
            ];
            break;
          case 'category2':
            categoryImages = [
              { src: '', alt: 'Sunflower Portraits Hero' },
              { src: '', alt: 'Sunflower Portrait 1' },
              { src: '', alt: 'Sunflower Portrait 2' },
              { src: '', alt: 'Sunflower Portrait 3' }
            ];
            break;
          case 'category3':
            categoryImages = [
              { src: '', alt: 'Dark Ambience Hero' },
              { src: '', alt: 'Dark Ambience 1' },
              { src: '', alt: 'Dark Ambience 2' },
              { src: '', alt: 'Dark Ambience 3' }
            ];
            break;
          case 'category4':
            try {
              categoryImages = [
                { src: '', alt: 'Vibrant City 1' },
                { src: '', alt: 'Vibrant City Hero' },
                { src: '', alt: 'Vibrant City 2' },
                { src: '', alt: 'Vibrant City 3' },
                { src: '', alt: 'Vibrant City 4' },
                { src: '', alt: 'Vibrant City 5' },
                { src: '', alt: 'Vibrant City 6' },
                { src: '', alt: 'Vibrant City 7' },
                { src: '', alt: 'Vibrant City 8' },
                { src: '', alt: 'Vibrant City 9' }
              ];
               
            } catch (error) {
              console.error('Error loading category4 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category5':
            try {
              categoryImages = [
                { src: '', alt: 'Sunny Portraits Hero' },
                { src: '', alt: 'Sunny Portrait 1' },
                { src: '', alt: 'Sunny Portrait 2' },
                { src: '', alt: 'Sunny Portrait 3' },
                { src: '', alt: 'Sunny Portrait 4' },
                { src: '', alt: 'Sunny Portrait 5' }
              ];
            } catch (error) {
              console.error('Error loading category5 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category6':
            try {
              categoryImages = [
                { src: '', alt: 'Collections from now and then Hero' },
                { src: '', alt: 'Collection 1' },
                { src: '', alt: 'Collection 2' },
                { src: '', alt: 'Collection 3' },
                { src: '', alt: 'Collection 4' },
                { src: '', alt: 'Collection 5' },
                { src: '', alt: 'Collection 6' },
                { src: '', alt: 'Collection 7' },
                { src: '', alt: 'Collection 8' },
                { src: '', alt: 'Collection 9' },
                { src: '', alt: 'Collection 10' }
              ];
            } catch (error) {
              console.error('Error loading category6 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category7':
            try {
              categoryImages = [
                { src: '', alt: 'Lake and Nature Hero' },
                { src: '', alt: 'Lake and Nature 1' },
                { src: '', alt: 'Lake and Nature 2', },
                { src: '', alt: 'Lake and Nature 3' }
              ];
            } catch (error) {
              console.error('Error loading category7 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category8':
            try {
              categoryImages = [
                { src: '', alt: 'Sunset Hero' },
                { src: '', alt: 'Sunset 1' },
                { src: '', alt: 'Sunset 2' }
              ];
            } catch (error) {
              console.error('Error loading category8 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category9':
            try {
              categoryImages = [
                { src: '', alt: 'Impromptu Portrait Hero' },
                { src: '', alt: 'Impromptu Portrait 1' }
              ];
            } catch (error) {
              console.error('Error loading category9 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category10':
            try {
              categoryImages = [
                { src: '', alt: 'Let kids have fun Hero' },
                { src: '', alt: 'Kids having fun 1' }
              ];
            } catch (error) {
              console.error('Error loading category10 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category11':
            try {
              categoryImages = [
                { src: '', alt: 'Creative Shots Hero' },
                { src: '', alt: 'Creative Shot 1' },
                { src: '', alt: 'Creative Shot 2' }
                
              ];
            } catch (error) {
              console.error('Error loading category11 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category12':
            try {
              categoryImages = [
                { src: '', alt: 'Wedding Shots Hero' },
                { src: '', alt: 'Wedding Shots 1' },
                { src: require(''), alt: 'Wedding Shots 2' },
                { src: '', alt: 'Wedding Shots 3' },
                { src: '', alt: 'Wedding Shots 4' }
              ];
            } catch (error) {
              console.error('Error loading category12 images:', error);
              categoryImages = [
                { src : '', alt: 'Fallback 1' },
                { src:''  , alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category13':
            try {
              categoryImages = [
                { src: '', alt: 'Home Food Hero' },
                { src: '', alt: 'Home Food 1' },
                { src: '', alt: 'Home Food 2' }
              ];
            } catch (error) {
              console.error('Error loading category13 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category14':
            try {
              categoryImages = [
                { src: '', alt: 'Quick Family portrait Hero' },
                { src: '', alt: 'Quick Family portrait 1' }
              ];
            } catch (error) {
              console.error('Error loading category14 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' }
              ];
            }
            break;
          case 'category15':
            try {
              categoryImages = [
                { src: '', alt: 'Guys in Pasila street Hero' },
                { src: '', alt: 'Guys in Pasila street 1' },
                { src: '', alt: 'Guys in Pasila street 2' }
              ];
            } catch (error) {
              console.error('Error loading category15 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category16':
            try {
              categoryImages = [
                { src: '', alt: 'Sunset Portraits Hero' },
                { src: '', alt: 'Sunset Portrait 1' },
                { src: '', alt: 'Sunset Portrait 2' },
                { src: '', alt: 'Sunset Portrait 3' },
                { src: '', alt: 'Sunset Portrait 4' }
              ];
            } catch (error) {
              console.error('Error loading category16 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category17':
            try {
              categoryImages = [
                { src: '', alt: 'Meevan Weaning Ceremony Hero' },
                { src: '', alt: 'Meevan Weaning Ceremony 1' },
                { src: '', alt: 'Meevan Weaning Ceremony 2' },
                { src: '', alt: 'Meevan Weaning Ceremony 3' },
                { src: '', alt: 'Meevan Weaning Ceremony 4' }
              ];
            } catch (error) {
              console.error('Error loading category17 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          case 'category18':
            try {
              categoryImages = [
                { src: '', alt: "Robin's Birthday Hero" },
                { src: '', alt: "Robin's Birthday 1" },
                { src: '', alt: "Robin's Birthday 2" },
                { src: '', alt: "Robin's Birthday 3" },
                { src: '', alt: "Robin's Birthday 4" }
              ];
            } catch (error) {
              console.error('Error loading category18 images:', error);
              categoryImages = [
                { src: '', alt: 'Fallback 1' },
                { src: '', alt: 'Fallback 2' }
              ];
            }
            break;
          default:
            // Fallback to category1 images if the category is not found
            categoryImages = [
              { src: '', alt: 'Fallback 1' },
              { src: '', alt: 'Fallback 2' }
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
