import React from "react";
import { eventsIcon, eventHeroImg } from "../../assets";
import SwiperComponent from "./swiper";
import Typewriter from "./typeWriter";
import SponsorSwiper from "./swiperSponsors";
import YoutubeChannel from "./youtubechannel";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image for Hero */}
      <div className="relative">
        <img
          src={eventHeroImg}
          alt="world"
          className="w-full h-auto object-cover"
        />

        {/* Typewriter text overlay with animation */}
        <motion.div
          className="absolute top-1/2 text-5xl sm:text-xl left-10 transform -translate-y-1/2 text-center z-10"
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
            className="text-[#3C970D] uppercase font-bold p-10 text-6xl sm:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Amazing events that{" "}
            <span className="text-[#F219F2] sm:text-5xl">
              shape your future.
            </span>
          </motion.h1>

          <motion.span
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button
              onClick={() => navigate("/membership")}
              className="relative h-[50px] w-40 overflow-hidden border border-[#3d960b] bg-white text-[#3d960b] 
            shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-[#3d960b] hover:before:w-2/4 hover:before:bg-[#3d960b] hover:after:w-2/4 hover:after:bg-[#3d960b]"
            >
              <span className="relative z-10">Partner With Us</span>
            </button>
          </motion.span>
        </motion.div>
      </div>

      {/* Hero Text Section */}
      <div className="events bg-center bg-fixed bg-cover w-full h-[90vh] relative text-white flex flex-col items-center justify-center px-2 md:px-0 text-center">
        <motion.h2
          className="text-xl z-20 md:text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Events Happening
        </motion.h2>
        <motion.p
          className="text-3xl z-20 md:text-7xl font-extrabold mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Amazing Events for this Generation
        </motion.p>
      </div>

      {/* Swiper Section */}
      <motion.div
        className="mt-12 px-2 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <SwiperComponent />
      </motion.div>

      <div className="justify-center p-12 mt-16 bg-[#DCDCDC] text-center">
        <motion.h2
          className="text-3xl pb-4 font-semibold text-[#F219F2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Sponsors
        </motion.h2>
        <motion.p
          className="text-lg pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the global sponsors,
        </motion.p>
        <SponsorSwiper />
      </div>

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
