import React from 'react';
import './Software.css';

const Software = () => {
  // Sample software projects data
  const projects = [
    {
      id: 1,
      title: 'LIDAR Navigation Robot',
      description: 'An autonomous robot using LIDAR for distance measurement and color sensors for maze navigation.',
      technologies: ['Arduino', 'C++', 'Embedded Systems', 'Sensors'],
      imageUrl: 'https://source.unsplash.com/random/800x600/?robot',
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and hosted on Google Cloud.',
      technologies: ['React', 'CSS', 'JavaScript', 'Google Cloud'],
      imageUrl: 'https://source.unsplash.com/random/800x600/?website',
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'Image Processing API',
      description: 'RESTful API for image processing and manipulation with various filters and effects.',
      technologies: ['Node.js', 'Express', 'Canvas API', 'Docker'],
      imageUrl: 'https://source.unsplash.com/random/800x600/?code',
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      imageUrl: 'https://source.unsplash.com/random/800x600/?ecommerce',
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard that displays current and forecasted weather data for any location.',
      technologies: ['JavaScript', 'Weather API', 'Chart.js', 'Geolocation'],
      imageUrl: 'https://source.unsplash.com/random/800x600/?weather',
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Productivity application for managing tasks, projects, and deadlines with team collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      imageUrl: 'https://source.unsplash.com/random/800x600/?productivity',
      githubUrl: 'https://github.com',
      demoUrl: '#'
    }
  ];

  return (
    <div className="software">
      <div className="software-header">
        <h1>Software Engineering Projects</h1>
        <p>A collection of my software development work and technical projects</p>
      </div>
      
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Django</li>
              <li>TensorFlow</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Google Cloud</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                    View Code
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="github-section">
        <h2>More on GitHub</h2>
        <p>Check out my GitHub profile for more projects and contributions.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-button">
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Software;
