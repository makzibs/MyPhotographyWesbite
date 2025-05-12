import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    // For this demo, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Let's Create Something Beautiful</h1>
        <p>Every photo tells a story. I'd love to help tell yours.</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>makzibsss@gmail.com</p>
          </div>
          
          <div className="info-item">
            <h3>Based In</h3>
            <p>Tampere, Finland</p>
            <p className="subtle-text">Available for travel worldwide</p>
          </div>
          
          <div className="info-item">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://instagram.com/makzibs_in_photo_and_video" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com/makzibsphotography" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a href="https://github.com/makzibs" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/makzibs" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="availability">
            <h3>Now Booking</h3>
            <p>Currently accepting bookings for weddings, portraits, and commercial work for 2025-2026.</p>
          </div>
        </div>
        
        <div className="contact-form">
          {formStatus.submitted ? (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
      
      <div className="contact-cta">
        <h2>Every Moment Deserves to Be Remembered</h2>
        <p>Whether it's your wedding day, a family milestone, or creating imagery for your brand — I believe in capturing authentic moments that tell your unique story. Let's chat about how we can create something meaningful together.</p>
      </div>
    </div>
  );
};

export default Contact;
