import React from "react";
import k from "../../../constants";
// import { executivebg } from "../../../assets";
import "../../../App.css";

const Executives = () => {
  return (
    <div className="bg-[#caf4f8] flex flex-col">
      <div className="font-semibold m-10 mx-96">
        <p className="text-[#3F9510] text-xl mx-44 my-10">Our Executives</p>
        <p className="text-3xl md:text-5xl mx-10">Our Expert Executives</p>
      </div>

      <div className="flex flex-row mx-40 my-20">
        {k.EXECUTIVES.map((item, index) => (
          <div
            key={index}
            className="relative m-4 flex flex-col bg-white h-96 w-56 items-center rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative w-56 h-60 overflow-hidden">
              <img
                src={item.image.props.src}
                alt={item.image.props.alt}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 hover:w-56 hover:h-72"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition">
                  {item.linkedin}
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition">
                  {item.twitter}
                </div>
              </div>
            </div>
            <p className="font-semibold text-black mt-2">{item.name}</p>
            <p className="text-gray-600">{item.position}</p>
          </div>
        ))}
      </div>

      <div className="relative my 40 h-[40%] w-full">

        <div className="bg-img bg-center  bg-fixed  bg-cover w-screen h-[60vh]">

        <div className="inner-bg "></div>

        </div>




      </div>

      {/* <div className="relative my-40 h-[40%] w-full">
        <img
          src={executivebg}
          alt="Executive Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <p className="text-white text-lg md:text-xl font-extrabold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloremque exercitationem autem et aut consequuntur esse eaque totam
            suscipit ullam, facere fugit laudantium? Minima fuga pariatur veniam
            cupiditate odit laboriosam!
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Executives;
