import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../App.css';
// import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import flyer1 from '../../assets/images/flyers.jpg';
import flyer2 from '../../assets/images/flyers.jpg';
import flyer3 from '../../assets/images/flyers.jpg';
import flyer4 from '../../assets/images/flyers.jpg';

const flyerImages = [flyer1, flyer2, flyer3, flyer4];

const SwiperComponent = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={4}
      spaceBetween={30}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {flyerImages.map((flyerImage, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-64 mt-10 group rounded-lg overflow-hidden">
            <img
              src={flyerImage}
              alt={`Flyer ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white px-4">
              <p className="mb-4 text-center text-lg font-medium">
                Be part of something great — shape your future with us.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#3C970D] hover:bg-[#3C970D] px-4 py-2 rounded-md text-sm">
                  Register Now
                </button>
                <button className="bg-[#F219F2] hover:bg-[#F219F2] px-4 py-2 rounded-md text-sm">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
