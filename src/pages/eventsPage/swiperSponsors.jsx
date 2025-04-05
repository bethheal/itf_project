import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const SponsorSwiper = () => {
  const logos = [
    '/path/to/logo1.png',
    '/path/to/logo2.png',
    '/path/to/logo3.png',
    '/path/to/logo4.png',
    // Add more logos as needed
  ];

  return (
    <div className="trusted-by-list">
      <Swiper
        className="trusted-by-swiper"
        spaceBetween={40}
        grabCursor={true}
        a11y={false}
        freeMode={true}
        speed={11000}
        loop={true}
        slidesPerView="auto"
        autoplay={{
          delay: 0.5,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { spaceBetween: 30 },
          480: { spaceBetween: 30 },
          767: { spaceBetween: 40 },
          992: { spaceBetween: 40 },
        }}
        modules={[FreeMode, Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex items-center justify-center"
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="h-12" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorSwiper;
