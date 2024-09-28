// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules'; 
// import 'swiper/css'; 
// import 'swiper/css/pagination'; 

// import promotion1 from '../../assets/promotion1.png';
// import promotion2 from '../../assets/promotion2.png';
// import promotion3 from '../../assets/promotion1.png';

// import './PromotionalCarousel.css';

// const PromotionalCarousel = () => {
//   const promotions = [promotion1, promotion2, promotion3];

//   return (
//     <div className="promotional-carousel">
//       <div className="carousel-container">
//         <div className="promotion-carousel-swiper">
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             pagination={{ clickable: true, el: '.pagination-container' }} 
//             autoplay={{ delay: 3000, disableOnInteraction: false }} 
//             modules={[Pagination, Autoplay]}
//             className="mySwiper"
//           >
//             {[0, 1, 2].map((_, slideIndex) => (
//               <SwiperSlide key={slideIndex}>
//                 <div className="promotion-item">
//                   {promotions.map((image, index) => (
//                     <img key={index} src={image} alt={`Promotion ${index + 1}`} />
//                   ))}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <div className="pagination-container">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromotionalCarousel;

import React from 'react';
import Carousel from '../Carousel/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import promotion1 from '../../assets/promotion1.png';
import promotion2 from '../../assets/promotion2.png';
import promotion3 from '../../assets/promotion1.png';
import './PromotionalCarousel.css';

const PromotionalCarousel = () => {
  const promotions = [promotion1, promotion2, promotion3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="promotional-carousel">
      <Carousel
        items={promotions}
        settings={settings}
        renderItem={(image) => (
          <div className="promotion-item">
            <img src={image} alt={`Promotion`} />
          </div>
        )}
      />
    </div>
  );
};

export default PromotionalCarousel;





