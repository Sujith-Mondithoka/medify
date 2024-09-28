import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Shared styles for the carousel

const Carousel = ({ items, settings, renderItem }) => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {renderItem(item)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
