// src/components/Foods.js
import React from 'react';
import './Foods.css';
import Header from '../components/Header';

const Foods = () => {
  return (

<>
    
    <section className="foods" id="foods">
      <div className="foods-content">
        <h2 className="section-title">Our Foods</h2>

        <div className="food-item">
          <img src="https://wallpaperbat.com/img/893333-food-salad-4k-ultra-hd-wallpaper.jpg" alt="Healthy Salad" className="food-image" />
          <div className="food-info">
            <h3 className="food-title">Healthy Salad</h3>
            <p className="food-description">A healthy salad for the gym is a nutritious meal designed to support your fitness goals by providing essential nutrients that aid in energy production, muscle recovery, and overall health.</p>
          </div>
        </div>

        <div className="food-item">
          <img src="https://images8.alphacoders.com/117/thumbbig-1171934.webp" alt="Protein Smoothie" className="food-image" />
          <div className="food-info">
            <h3 className="food-title">Protein Smoothie</h3>
            <p className="food-description">A protein smoothie for the gym is a blended drink that primarily contains protein and other nutritious ingredients. It is designed to support fitness goals, such as muscle building, recovery, and overall health.</p>
          </div>
        </div>

        <div className="food-item">
          <img src="https://wallpaperaccess.com/full/4002050.jpg" alt="Dry Fruits" className="food-image" />
          <div className="food-info">
            <h3 className="food-title">Dry Fruits</h3>
            <p className="food-description">Dry fruits, also known as dried fruits, are fruits that have had almost all of their water content removed through drying methods. They are nutrient-dense and offer various benefits for gym-goers and athletes.</p>
          </div>
        </div>

        <div className="food-item">
          <img src="https://wallpapercave.com/wp/wp10611810.jpg" alt="Chicken Breast" className="food-image" />
          <div className="food-info">
            <h3 className="food-title">Chicken Breast</h3>
            <p className="food-description">Chicken breast is a staple in the diet of many gym-goers and athletes due to its numerous benefits that support fitness and health goals. Protein is essential for repairing and building muscle tissues that are broken down during exercise. Chicken breast provides a high amount of complete protein, which includes all the essential amino acids needed for muscle recovery and growth.</p>
          </div>
        </div>


        {/* Add more food items as needed */}
      </div>
    </section>
</>
  );
};

export default Foods;
