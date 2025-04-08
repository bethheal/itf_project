import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { testHeadshot } from '../../../../assets';

const Testimonies = () => {
 

  // const renderStars = (rating) => {
  //   const stars = [];
  //   for (let i = 0; i < 5; i++) {
  //     stars.push(
  //       <span
  //         key={i}
  //         className={`text-${i < rating ? 'yellow' : 'gray'}-400 text-lg`}
  //       >
  //         ★
  //       </span>
  //     );
  //   }
  //   return stars;
  // };

  return (
    <div className="bg-white p-10 py-10">
      <h2 className="text-center text-2xl font-semibold mb-4">Testimonies</h2>
      <Swiper
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img
                src={testHeadshot} 
              alt="headshots"
              className="w-6 h-6 rounded-full object-cover mb-4" // Avatar image size
            />
            <p className="font-semibold ">John Doe</p>
            <p className="text-gray-600">"This is the best service I've ever used! Highly recommend it."</p>
            <div className="flex justify-center mt-10">
              {/* {renderStars(5)} */}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img
              src={testHeadshot} 
              alt="headshots"
              className="w-6 h-6 rounded-full object-cover mb-4" // Avatar image size
            />
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-600">"Amazing experience, exceeded all my expectations! A must try!"</p>
            <div className="flex justify-center mt-10">
              {/* {renderStars(4)} */}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img
                src={testHeadshot} 
              alt="headshots"
              className="w-6 h-6 rounded-full object-cover mb-4" // Avatar image size
            />
            <p className="font-semibold">Sam Williams</p>
            <p className="text-gray-600">"Wonderful! I am so happy with the results. Definitely coming back."</p>
            <div className="flex justify-center mt-10">
               {/* {renderStars(3)} */}
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img
               src={testHeadshot} 
              alt="headshots"
              className="w-6 h-6 rounded-full object-cover mb-4" // Avatar image size
            />
            <p className="font-semibold">Emily Johnson</p>
            <p className="text-gray-600">"The team was fantastic and so helpful throughout the process."</p>
            <div className="flex justify-center mt-10">
              {/* {renderStars(5)} */}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img
                src={testHeadshot} 
              alt="headshots"
              className="w-6 h-6 rounded-full object-cover mb-4" // Avatar image size
            />
            <p className="font-semibold">Chris Lee</p>
            <p className="text-gray-600">"I highly recommend this service to anyone looking for quality."</p>
            <div className="flex justify-center mt-10">
              {/* {renderStars(4)} */}


            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonies;
