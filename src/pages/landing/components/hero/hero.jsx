import React from "react";
import { hero, eventHeroImg } from "../../../../assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 w-full h-[40rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${eventHeroImg})`,
          zIndex: -1, // Ensure the background stays behind text
        }}
      />
      
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 w-full h-[40rem] bg-[#3d960b]"
        style={{
          opacity: 0.2, // Adjust opacity to darken the background
          zIndex: -1, // Keep it behind the text and other content
        }}
      />
      
      {/* Text and Button Content */}
      <div className="absolute flex flex-col lg:flex-row mt-10 lg:mt-0 mx-5 md:mx-10 lg:mx-20 items-center z-10">
        <div className="m-5 md:m-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl my-5 font-extrabold">
            Integrity Trust Foundation
          </h2>
          <span className="my-5 md:my-10 text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit, doloremque, ea reprehenderit quibusdam sit
            nobis atque autem
          </span>
          <span className="mt-5">
            <button
              onClick={() => navigate("/membership")}
              className="relative h-[50px] w-40 overflow-hidden border border-[#3d960b] bg-white text-[#3d960b] 
              shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-[#3d960b] hover:before:w-2/4 hover:before:bg-[#3d960b] hover:after:w-2/4 hover:after:bg-[#3d960b]"
            >
              <span className="relative z-10">Become a Member</span>
            </button>
          </span>
        </div>
        <img
          src={hero}
          alt="hero Image"
          className="absolute inset-0 w-full h-full my-60 object-cover opacity-20 sm:relative sm:w-[20%] md:w-[70%] lg:w-[50%] sm:opacity-100 mt-5 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default Hero;
