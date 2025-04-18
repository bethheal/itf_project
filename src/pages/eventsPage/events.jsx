import React from "react";
import { eventsIcon, eventHeroImg } from "../../assets";
import SwiperComponent from "./swiper";
import Typewriter from "./typeWriter";
import SponsorSwiper from "./swiperSponsors";
import YoutubeChannel from "./youtubechannel";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="relative">
        <img
          src={eventHeroImg}
          alt="event hero"
          className="w-full h-[25rem] object-cover"
        />

        {/* Overlay with Typewriter and Button */}
        <motion.div
  className="absolute top-1/2 sm:top-1/3 md:top-1/3 w-full px-4 text-center z-10"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

          <Typewriter
            texts={[
              "We are Integrity Trust Foundation",
              "Guiding Young Minds, Lighting the Way.",
              "A Better Future Begins With Us.",
              "#DirectUrPath",
            ]}
            period={2000}
          />

          <motion.h1
            className="text-[#2D6A4F] uppercase font-bold pt-10 text-6xl sm:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Amazing events that{" "}
            <span className="text-[#F2C14E] sm:text-5xl">
              shape your future.
            </span>
          </motion.h1>

         
          <motion.div
  className="mt-8 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
>
  <button
    onClick={() => navigate("/membership")}
    className="relative h-[50px] w-48 border border-[#2D6A4F] text-[#2D6A4F] bg-white font-semibold rounded-md 
    overflow-hidden shadow-xl transition-all hover:text-white hover:shadow-[#2D6A4F]
    before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-[#2D6A4F] before:duration-500 
    after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:bg-[#2D6A4F] after:duration-500 
    hover:before:w-2/4 hover:after:w-2/4"
  >
    <span className="relative z-10">Partner With Us</span>
  </button>

  
  <a
  href="https://paystack.com/pay/czjsp38823"
  target="_blank"
  rel="noopener noreferrer"
  className="relative flex items-center justify-center h-[50px] w-48 border border-[#F2C14E] text-[#F2C14E] bg-white font-semibold rounded-md 
    overflow-hidden shadow-xl transition-all hover:text-white hover:shadow-[#F2C14E]
    before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-[#F2C14E] before:duration-500 
    after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:bg-[#F2C14E] after:duration-500 
    hover:before:w-2/4 hover:after:w-2/4"
>
  <span className="relative z-10">Donate</span>
</a>


</motion.div>
</motion.div>

</div>

      {/* Events Section Header */}
      <div className="events  bg-fixed    relative w-full h-[80vh] text-white flex items-center justify-center px-4 text-center bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0  z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center">
          <motion.h2
            className="text-xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Events Happening
          </motion.h2>
          <motion.p
            className="text-3xl md:text-7xl font-extrabold mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Amazing Events for this Generation
          </motion.p>
        </div>
      </div>

      {/* Event Swiper */}
      <motion.div
        className="mt-12 px-4 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <SwiperComponent />
      </motion.div>

      {/* Sponsors Section */}
      <div className="py-16 text-center px-4">
        <motion.h2
          className="text-3xl font-semibold text-[#F2C14E] pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Sponsors
        </motion.h2>
        <motion.p
          className="text-lg pb-6 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the global sponsors who support our mission.
        </motion.p>
        <SponsorSwiper />
      </div>

      {/* YouTube Channel Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <YoutubeChannel />
      </motion.div>
    </div>
  );
};

export default Events;
