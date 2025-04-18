import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

// Import logos statically
import logo1 from '../../assets/images/sponsorLogo.png';
import logo2 from '../../assets/images/sponsorLogo.png';
import logo3 from '../../assets/images/sponsorLogo.png';
import logo4 from '../../assets/images/sponsorLogo.png';
import logo5 from '../../assets/images/sponsorLogo.png';
import logo6 from '../../assets/images/sponsorLogo.png';
import logo7 from '../../assets/images/sponsorLogo.png';
import logo8 from '../../assets/images/sponsorLogo.png';
import logo9 from '../../assets/images/sponsorLogo.png';
import logo10 from '../../assets/images/sponsorLogo.png';


const SponsorSwiper = () => {
  const logos = [logo1, logo2, logo3, logo4,logo5,logo6,logo7,logo8,logo9,logo10,];

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
          delay: 1,
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
            className="w-auto flex items-center justify-center"
          >
            <img src={logo} alt={`Logo ${index + 1}`}   className="h-6 w-6 object-contain bg-[#DCDCDC] !important" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorSwiper;
