import React from "react";
import { eventsIcon, eventHeroImg } from "../../assets";
import SwiperComponent from "./swiper";
import Typewriter from "./typeWriter";
import SponsorSwiper from "./swiperSponsors";

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

        {/* Typewriter text overlay */}
        <div className="absolute top-1/2  text-5xl  sm:text-xl left-10 transform -translate-y-1/2 text-center z-10">
          <Typewriter
            texts={[
              "We are Integrity Trust Foundation",
              "Guiding Young Minds, Lighting the Way.",
              "A Better Future Begins With Us.",
              "#DirectUrPath",
            ]}
            period={2000}
          />

          <h1 className="text-[#3C970D] uppercase font-bold p-10  text-6xl sm:text-4xl">
            Amazing events that{" "}
            <span className="text-[#F219F2]  sm:text-5xl">
              shape your future.
            </span>
          </h1>
          <span className="mt-5">
            <button
              onClick={() => navigate("/membership")}
              className="relative h-[50px] w-40 overflow-hidden border border-[#3d960b] bg-white text-[#3d960b] 
            shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-[#3d960b] hover:before:w-2/4 hover:before:bg-[#3d960b] hover:after:w-2/4 hover:after:bg-[#3d960b]"
            >
              <span className="relative z-10">Patner With Us</span>
            </button>
          </span>
        </div>
      </div>

      {/* Overlay Section */}
      <div className="absolute top-[52rem] left-1/2 transform -translate-x-1/2 z-10 w-full  md:px-6">
        <div className="bg-[#3C970D] h-auto md:h-[15rem] w-full md:w-[50rem] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-6 md:py-0 rounded-lg shadow-lg">
          {/* Empty space on the left (visible only on md and up) */}
          <div className="hidden md:block w-[15rem]" />

          {/* Pink box centered */}
          <div className="bg-[#F219F2] w-[12rem] md:w-[16rem] h-[12rem] md:h-[15rem] flex flex-col justify-center items-center rounded-md">
            <img
              className="p-3 md:p-5 w-14 md:w-auto"
              src={eventsIcon}
              alt="Checked Calendar"
            />
            <span className="text-base md:text-lg font-extrabold text-center">
              OUR EVENTS
            </span>
          </div>

          {/* Text on the right */}
          <span className="text-sm md:text-base w-full md:w-[15rem] p-2 md:p-4 font-normal text-center md:text-left text-white">
            Exciting events at Integrity Trust Foundation! Join us as we create
            opportunities for young minds.
          </span>
        </div>
      </div>

      {/* Hero Text Section */}
      <div className="events bg-center bg-fixed bg-cover w-full h-[90vh] relative text-white flex flex-col items-center justify-center px-2 md:px-0 text-center">
        <h2 className="text-xl z-20 md:text-3xl font-bold">Events Happening</h2>
        <p className="text-3xl z-20 md:text-7xl font-extrabold mt-4">
          Amazing Events for this Generation
        </p>
      </div>

      {/* Swiper Section */}
      <div className="mt-12 px-2 md:px-10">
        <SwiperComponent />
      </div>

      <div>
        <h2>Meet Our Sponsors </h2>
        <p>
          Discover the global sponsors, Discover the global sponsors, Discover the
          global sponsors, Discover the global sponors
        </p>
        <SponsorSwiper/>
      </div>
    </div>
  );
};

export default Events;
