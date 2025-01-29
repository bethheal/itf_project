import React from "react";
import { hero } from "../../../../assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row my-20 lg:my-40 mx-5 md:mx-10 lg:mx-20 items-center">
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
        className="absolute inset-0 w-full h-full  my-60 object-cover opacity-20 sm:relative sm:w-[20%] md:w-[70%] lg:w-[50%] sm:opacity-100 mt-5 lg:mt-0"
      />
    </div>
  );
};

export default Hero;
