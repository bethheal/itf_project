import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { testHeadshot } from '../../../../assets';

const testimonies = [
  {
    name: "John Doe",
    message: "This is the best service I've ever used! Highly recommend it.",
  },
  {
    name: "Jane Smith",
    message: "Amazing experience, exceeded all my expectations! A must try!",
  },
  {
    name: "Sam Williams",
    message: "Wonderful! I am so happy with the results. Definitely coming back.",
  },
  {
    name: "Emily Johnson",
    message: "The team was fantastic and so helpful throughout the process.",
  },
  {
    name: "Chris Lee",
    message: "I highly recommend this service to anyone looking for quality.",
  },
];

const Testimonies = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-10 lg:px-24">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#333] mb-12">
        What People Are Saying
      </h2>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper max-w-4xl mx-auto"
      >
        {testimonies.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={testHeadshot}
                loading ="lazy"

                alt="headshot"
                className="w-8 h-8 rounded-full object-cover mb-6 border-4 border-[#caf4f8]"
              />
              <p className="font-semibold text-lg text-[#333]">{testimonial.name}</p>
              <p className="text-gray-600 max-w-xl mt-3">{testimonial.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonies;
