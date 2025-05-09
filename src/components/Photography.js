import React, { useState } from 'react';
import './Photography.css';

const Photography = () => {
  // Categories for photo filtering
  const categories = ['All', 'Nature', 'Urban', 'Portrait', 'Travel'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sample photography data
  const photos = [
    {
      id: 1,
      title: 'Mountain Sunrise',
      category: 'Nature',
      imageUrl: 'https://source.unsplash.com/random/800x600/?mountains',
      description: 'Sunrise over the mountains captured during early morning hike.'
    },
    {
      id: 2,
      title: 'City Lights',
      category: 'Urban',
      imageUrl: 'https://source.unsplash.com/random/800x600/?citynight',
      description: 'Night photography of city skyline with vibrant lights.'
    },
    {
      id: 3,
      title: 'Forest Path',
      category: 'Nature',
      imageUrl: 'https://source.unsplash.com/random/800x600/?forest',
      description: 'Serene path through an ancient forest with morning fog.'
    },
    {
      id: 4,
      title: 'Street Portrait',
      category: 'Portrait',
      imageUrl: 'https://source.unsplash.com/random/800x600/?portrait',
      description: 'Candid street portrait capturing genuine emotion.'
    },
    {
      id: 5,
      title: 'Coastal Sunset',
      category: 'Nature',
      imageUrl: 'https://source.unsplash.com/random/800x600/?sunset,beach',
      description: 'Golden sunset over the ocean with silhouetted rocks.'
    },
    {
      id: 6,
      title: 'Urban Architecture',
      category: 'Urban',
      imageUrl: 'https://source.unsplash.com/random/800x600/?architecture',
      description: 'Modern architectural details in urban environment.'
    },
    {
      id: 7,
      title: 'Venice Canals',
      category: 'Travel',
      imageUrl: 'https://source.unsplash.com/random/800x600/?venice',
      description: 'Traditional gondolas on the famous canals of Venice.'
    },
    {
      id: 8,
      title: 'Mountain Lake Reflection',
      category: 'Nature',
      imageUrl: 'https://source.unsplash.com/random/800x600/?lake,mountains',
      description: 'Perfect reflection of mountains in a still alpine lake.'
    },
    {
      id: 9,
      title: 'Tokyo Streets',
      category: 'Travel',
      imageUrl: 'https://source.unsplash.com/random/800x600/?tokyo',
      description: 'Vibrant street scene in Tokyo with neon lights.'
    }
  ];
  
  // Filter photos based on active category
  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);
  
  return (
    <div className="photography">
      <div className="photography-header">
        <h1>Photography Portfolio</h1>
        <p>A collection of my best photographic work across various genres</p>
      </div>
      
      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="photo-grid">
        {filteredPhotos.map(photo => (
          <div className="photo-item" key={photo.id}>
            <div className="photo-image">
              <img src={photo.imageUrl} alt={photo.title} />
            </div>
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <span className="photo-category">{photo.category}</span>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="photography-contact">
        <h2>Interested in my photography?</h2>
        <p>I'm available for photoshoots, collaborations, and print sales.</p>
        <button className="contact-btn">Get in Touch</button>
      </div>
    </div>
  );
};

export default Photography;
