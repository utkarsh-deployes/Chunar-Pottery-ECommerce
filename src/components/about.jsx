import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading-container">
        <div className="decorative-line-container">
          <div className="decorative-line"></div>
          <span className="decorative-star">★</span>
          <div className="decorative-line"></div>
        </div>
        <h1 className="about-heading">About Us</h1>
      </div>
      <div className="about-content">
        <p>
          Our journey started with the vision to preserve and promote the culture, history, and tradition of Chunar, a
          town in Mirzapur district of Uttar Pradesh, known for its exquisite pottery. Our mission is to support local
          artisans by bringing their timeless craftsmanship from potters’ wheels to your homes while fostering a blend
          of traditional and contemporary aesthetics in every piece.
        </p>
        <p>
          ChunarPottery.Store offers handcrafted pottery products with authentic designs that reflect the rich heritage
          of the region. We aim to provide a platform for artisans to showcase their art and revive the lost charm of
          Chunar pottery, a craft that has been passed down through generations.
        </p>
        <p>
          From decorative vases to functional kitchenware, our products celebrate the uniqueness of Indian art and the
          skills of our local craftsmen. Our partnership with the One District One Product (ODOP) initiative adds
          recognition to our artisans' work and provides a gateway to global markets.
        </p>
        <p>
          This dream project was brought to life by two passionate developers, Utkarsh Dudy and Abhishek Yadav, who
          envisioned a world where Chunar's pottery art regains its place of pride in the modern world. With meticulous
          attention to detail and a deep love for Chunar pottery, they strive every day to bring artistry,
          craftsmanship, and hope for a brighter future.
        </p>
      </div>
      <div className="decorative-line-container small-line">
        <div className="decorative-line"></div>
        <span className="decorative-star">★</span>
        <div className="decorative-line"></div>
      </div>
      <div className="founders">
        <div className="founder">
          <img src="src\components\abhishek.png" alt="Abhishek" className="founder-image" />
          <h3>Abhishek - Co Founder</h3>
        </div>
        <div className="founder">
          <img src="src\components\utkarsh.png" alt="Utkarsh" className="founder-image" />
          <h3>Utkarsh - Co Founder</h3>
        </div>
      </div>
      <div className="legacy-section">
        <img src="src\components\Chunar.jpg" alt="Pottery Background" className="legacy-image" />
        <div className="legacy-text">
          <h2>rewriting the legacy of chunar...</h2>
        </div>
      </div>
      
    </div>
  );
};

export default About;
