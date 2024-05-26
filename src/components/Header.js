// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="https://static.vecteezy.com/system/resources/previews/011/161/966/non_2x/fitness-sport-gym-logo-design-vector.jpg" alt="Gym Logo" />
      </div>
      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
