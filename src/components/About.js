import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="about-intro">
          <div className="about-image">
            <img src="https://source.unsplash.com/random/400x400/?portrait" alt="Profile" />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm a passionate software engineer and photographer based in Finland. With a background in 
              embedded systems and web development, I enjoy creating both technical solutions and capturing 
              beautiful moments through my camera.
            </p>
            <p>
              My journey in technology began with embedded systems programming, working on projects like 
              autonomous robots with LIDAR navigation. Over time, I've expanded my skills to include web 
              development, cloud infrastructure, and various programming languages.
            </p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Education</h3>
              <p>Completed my degree in Computer Science with a focus on embedded systems and software engineering.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Early Career</h3>
              <p>Started as an embedded systems developer working on IoT devices and sensor integration projects.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Web Development</h3>
              <p>Expanded my skills to include full-stack web development, working with modern frameworks and cloud platforms.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Photography</h3>
              <p>Developed a passion for photography, specializing in landscape and urban photography.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Present</h3>
              <p>Currently working on combining my technical expertise with creative pursuits, building innovative solutions and capturing moments through photography.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="skills-interests">
        <div className="skills-section">
          <h2>Professional Skills</h2>
          <ul>
            <li>Embedded Systems Programming (C/C++)</li>
            <li>Web Development (React, Node.js)</li>
            <li>Cloud Infrastructure (Google Cloud, AWS)</li>
            <li>Database Design and Management</li>
            <li>Sensor Integration and IoT Solutions</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>
        
        <div className="interests-section">
          <h2>Personal Interests</h2>
          <ul>
            <li>Landscape and Urban Photography</li>
            <li>Hiking and Outdoor Adventures</li>
            <li>Reading Science Fiction and Technical Books</li>
            <li>Exploring New Technologies</li>
            <li>Travel and Cultural Exploration</li>
          </ul>
        </div>
      </div>
      
      <div className="philosophy-section">
        <h2>My Philosophy</h2>
        <blockquote>
          "I believe in creating technology that enhances human experiences and capturing moments that tell meaningful stories. 
          Whether I'm writing code or composing a photograph, I strive for elegance, clarity, and purpose in everything I create."
        </blockquote>
      </div>
    </div>
  );
};

export default About;
