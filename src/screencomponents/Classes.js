// src/components/Classes.js
import React from 'react';
import './Classes.css';

const Classes = () => {
  return (
    <section className="classes" id="classes">
      <div className="classes-content">
        <h2 className="section-title">Our Classes</h2>
        <div className="class">
          <img src="https://wallpaperaccess.com/full/139071.jpg" alt="Class 1" className="class-image" />
          <div className="class-info">
            <h3 className="class-title">Yoga</h3>
            <p className="class-description">Embark on a journey of self-discovery and holistic well-being with our expertly crafted yoga classes. 
            Whether you're a seasoned yogi or a complete beginner, our classes cater to individuals of all levels, a
            ges, and backgrounds, offering a supportive and inclusive environment to explore the ancient practice of yoga.
            </p>
          </div>
        </div>
        <div className="class">
          <img src="https://wallpaperbat.com/img/595258-crossfit-wallpaper.jpg" alt="Class 2" className="class-image" />
          <div className="class-info">
            <h3 className="class-title">Crossfit</h3>
            <p className="class-description">Are you ready to challenge yourself, push your limits, and achieve your fitness goals? 
            Look no further than our invigorating fitness classes designed to inspire and empower you to reach new heights of strength, 
            endurance, and vitality. Whether you're a fitness enthusiast or just starting your journey, 
            our diverse range of classes caters to individuals of all fitness levels and interests, providing a supportive community and expert guidance every step of the way.</p>
          </div>
        </div>
        {/* Add more classes as needed */}
      </div>
    </section>
  );
};

export default Classes;
