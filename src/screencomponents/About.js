// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <div className="about-description">
          <p>
            Welcome to our gym! Our mission is to help you achieve your fitness goals with our professional trainers and state-of-the-art facilities. Join us for a healthier, fitter you.
          </p>
        </div>
        <div className="about-images">
          <img src="https://wallpaperaccess.com/full/834269.jpg" alt="Gym 1" className="about-image"/>
          <img src="https://wallpaperaccess.com/full/834285.jpg" alt="Gym 2" className="about-image"/>
          <img src="https://wallpaperaccess.com/full/804857.jpg" alt="Gym 3" className="about-image"/>
        </div>
      </div>
    </section>
  );
};

export default About;
