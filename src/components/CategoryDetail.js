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

  // Cloudinary public IDs for all categories
  const cloudinaryIds = useMemo(() => ({
    category1: {
      heroImage: 'heroImage1',
      images: ['1.1_uumegw', '1.2_n2iqyt', '1.3_vk0im7', '1.4_olfl4j']
    },
    category2: {
      heroImage: 'heroImage2',
      images: ['2.1_nbifpq', '2.2_wry1xz', '2.3_wdigqw', '2.4_gjn7is']
    },
    category3: {
      heroImage: 'heroImage3',
      images: ['3.1_leliwh', '3.2_wmsbqt']
    },
    category4: {
      heroImage: 'heroImage4',
      images: ['4.1', '4.2', '4.3', '4.4_subfc0', '4.6', '4.7_piklfe', '4.8_xaovzy']
    },
    category5: {
      heroImage: 'heroImage5',
      images: ['5.1_nhxw7a', '5.2_xj9hqm']
    },
    category6: {
      heroImage: 'heroImage6',
      images: ['6.1', '6.2_m7nhrl', '6.3_p5kdof', '6.4_vljcvg', '6.5_jdl912', '6.6_ynhqly', '6.7_jzxn1t', '6.8_znn3ym', '6.9_lwctpa', '6.10_h0jt5v']
    },
    category7: {
      heroImage: 'heroImage7',
      images: ['7.2_pg892a', '7.3_nyzdyq']
    },
    category8: {
      heroImage: 'heroImage8',
      images: ['8.1_hl4gkh', '8.2_prvvoj']
    },
    category9: {
      heroImage: 'heroImage9',
      images: ['9.1_rtv12t']
    },
    category10: {
      heroImage: 'heroImage10',
      images: ['10.1_vmjxcq']
    },
    category11: {
      heroImage: 'heroImage11',
      images: ['11.1_zsknhs', '11.2_vrnpx0']
    },
    category12: {
      heroImage: 'heroImage12',
      images: ['12.2_esjrv0', '12.3_joxmay', '12.4_tx9tux']
    },
    category13: {
      heroImage: 'heroImage13',
      images: ['13.1_xdxai0', '13.2_fatdmj']
    },
    category14: {
      heroImage: 'heroImage14',
      images: ['14.1_dedgec']
    },
    category15: {
      heroImage: 'heroImage15',
      images: ['15.1_upsjpd']
    },
    category16: {
      heroImage: 'heroImage16',
      images: ['16.1', '16.2', '16.3', '16.4']
    },
    category17: {
      heroImage: 'heroImage17',
      images: ['17.1_dwghbw', '17.2_f95eqa', '17.3_dkzivr', '17.4_qmg0nb']
    },
    category18: {
      heroImage: 'heroImage18',
      images: ['18.1_ihjvhf', '18.2_ds5fqo', '18.3_eukgkl', '18.4_mjtylu']
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
