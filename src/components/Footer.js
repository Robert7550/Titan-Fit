// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Gym Name</h1>
          <p className='p-text'>
            Your fitness journey starts here. Join us to achieve your fitness goals with our professional trainers and state-of-the-art facilities.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><i className="fas fa-phone"></i>+91 7550383745</p>
          <p><i className="fas fa-envelope"></i>robertalex7550@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Gym Name | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
