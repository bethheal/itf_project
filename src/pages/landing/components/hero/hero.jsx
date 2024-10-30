import React from "react";
import { hero } from "../../../../assets";
import { SparklesPreview } from ".";

const Hero = () => {
  return (
    <div className="flex my-40 mx-20">
      <SparklesPreview/>
      <div className="m-10 flex flex-col ">
        <h2 className="text-5xl my-5 font-extrabold">
          Integrity Trust Foundation
        </h2>
        <span className="my-10">
          {" "}
          Lorem ipsum dolor sit, doloremque, ea reprehenderit quibusdam sit
          nobis atque autem
        </span>
        <span>
          <button class="relative h-[50px] w-40 overflow-hidden border border-[#3d960b]  bg-white text-[#3d960b]  shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-[#3d960b]  hover:before:w-2/4 hover:before:bg-[#3d960b] hover:after:w-2/4 hover:after:bg-[#3d960b] ">
            <span class="relative z-10">Become a Member</span>
          </button>

          {/* <button className="bg-[#3d960b] h-10 w-40">Become a Member</button> */}
        </span>
      </div>
      <img src={hero} alt="hero Image" />
    </div>
  );
};

export default Hero;
