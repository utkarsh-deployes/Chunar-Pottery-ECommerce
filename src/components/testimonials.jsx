import React from 'react';
import './Testimonials.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// Importing images from the src folder
import AnimeshImage from './New folder/Animesh.png';
import PriyankaImage from './New folder/Priyanka.png';
import ShashankImage from './New folder/Shashank.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Animesh',
      image: AnimeshImage, // Imported image
      text: 'ChunarPottery.store brings the essence of Indian heritage into every product. The tea set I purchased is elegant, durable, and adds so much character to my home. Truly exceptional craftsmanship!',
      rating: 5,
    },
    {
      name: 'Priyanka',
      image: PriyankaImage, // Imported image
      text: 'The decorative vase I ordered exceeded my expectations. The intricate detailing and perfect finish showcase true artistry. Shopping here was a delightful experience!',
      rating: 4.5,
    },
    {
      name: 'Shashank',
      image: ShashankImage, // Imported image
      text: 'The decorative vase I ordered exceeded my expectations. The intricate detailing and perfect finish showcase true artistry. Shopping here was a delightful experience!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-container">
      <div className="testimonials-heading">
        <span className="line"></span>
        <h1>Testimonials</h1>
        <span className="line"></span>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => {
          const fullStars = Math.floor(testimonial.rating);
          const halfStar = testimonial.rating % 1 !== 0;
          const stars = [];

          for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="star-icon" />);
          }

          if (halfStar) {
            stars.push(<FaStarHalfAlt key="half" className="star-icon" />);
          }

          return (
            <div key={index} className="testimonial-card">
              <div className="image-wrapper">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">{stars}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
