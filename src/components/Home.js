import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Software Engineer & Photographer</p>
          <div className="hero-buttons">
            <Link to="/photography" className="btn btn-primary">View Photography</Link>
            <Link to="/software" className="btn btn-secondary">Explore Projects</Link>
          </div>
        </div>
      </section>
      
      <section className="featured-section">
        <h2>Featured Work</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <div className="featured-image photography"></div>
            <h3>Photography</h3>
            <p>Capturing moments and emotions through my lens.</p>
            <Link to="/photography" className="featured-link">View Gallery</Link>
          </div>
          
          <div className="featured-item">
            <div className="featured-image software"></div>
            <h3>Software Projects</h3>
            <p>Creating innovative solutions with clean code.</p>
            <Link to="/software" className="featured-link">See Projects</Link>
          </div>
        </div>
      </section>
      
      <section className="about-preview">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate software engineer with a love for photography. 
            I combine technical expertise with creative vision to build beautiful 
            and functional experiences.
          </p>
          <Link to="/about" className="btn btn-outline">Learn More</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
