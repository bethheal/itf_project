import React from "react";
import k from "../../../constants";
// import { executivebg } from "../../../assets";
import "../../../App.css";
import { useNavigate } from "react-router-dom";


const Executives = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col">
      <div className="font-semibold flex flex-col justify-center mx-4 sm:mx-10 md:mx-[15rem] my-10">
        <p className="text-[#3F9510] text-xl sm:text-2xl md:text-xl mx-4 sm:mx-40">Our Executives</p>
        <p className="text-3xl md:text-5xl my-10 mx-4 sm:mx-20">Our Expert Executives</p>
      </div>

      <div className="flex bg-[#caf4f8] flex-col sm:flex-row sm:flex-wrap justify-center mx-4 sm:mx-10 my-20">
        {k.EXECUTIVES.map((item, index) => (
          <div
            key={index}
            className="relative m-4 flex flex-col bg-white h-96 w-full sm:w-56 items-center rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={item.image.props.src}
                alt={item.image.props.alt}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 hover:w-full hover:h-72"
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
            <p className="font-semibold text-black mt-2 text-center">{item.name}</p>
            <p className="text-gray-600 text-center">{item.position}</p>
          </div>
        ))}
      </div>

      <div className="relative h-[27rem]  w-full">
        <div className="absolute  left-8 sm:left-28 w-full sm:w-[85vw] h-[50vh] bg-[#3f9510] opacity-50 z-20">
          <div className="flex flex-col sm:flex-row sm:m-40 justify-between text-justify sm:text-left">
            <p className="text-white font-extrabold text-2xl sm:text-3xl m-4">
              LET'S CHANGE THE WORLD
            </p>
            <button 
            onClick={()=>navigate("/volunteer")}
            className="relative h-[50px] w-80 sm:w-96 overflow-hidden border border-[#caf4f8] bg-white px-3 font-bold shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#3d960b] before:transition-all before:duration-500 hover:text-white hover:shadow-[#3d960b] hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">BECOME A VOLUNTEER</span>
            </button>
          </div>
        </div>

        <div className="bg-img bg-center bg-fixed bg-cover w-screen h-[60vh]"></div>
      </div>
    </div>
  );
};

export default Executives;
