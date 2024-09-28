import React from 'react';
import Carousel from '../Carousel/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/left.png';
import ahmad from '../../assets/ahmad.png';
import heena from '../../assets/heena.png';
import ankur from '../../assets/ankur.png';
import asian from '../../assets/asian2.png';
import './SpecialistSection.css';

const SpecialistSection = () => {
  const specialists = [
    { name: "Dr. Lesley Hull", specialization: "Medicine", image: image1 },
    { name: "Dr. Ahmad Khan", specialization: "Neurologist", image: ahmad },
    { name: "Dr. Heena Sachdeva", specialization: "Orthopedics", image: heena },
    { name: "Dr. Ankur Sharma", specialization: "Medicine", image: ankur },
    { name: "Dr. Ahmad Stevens", specialization: "Neurologist", image: asian },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  

  return (
    <div className="specialist-carousel">
      <h1>Our Medical Specialist</h1>
      <Carousel
        items={specialists}
        settings={settings}
        renderItem={(specialist) => (
          <div className="specialist-item">
            <img src={specialist.image} alt={specialist.name} className="specialist-image" />
            <h2>{specialist.name}</h2>
            <p>{specialist.specialization}</p>
          </div>
        )}
      />
    </div>
  );
};

export default SpecialistSection;

