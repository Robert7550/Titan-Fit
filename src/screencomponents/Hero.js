// src/components/Hero.js
import React from 'react';
import './Hero.css';
import About from './About';
import Classes from './Classes'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Gym</h1>
          <p className="hero-subtitle">Your Fitness Journey Starts Here</p>
         
            <a href="/payment" className="hero-button">Join Now</a>

        </div>
      </section>

      <About/>
      <Classes/>
    </>
      
  );
};

export default Hero;
