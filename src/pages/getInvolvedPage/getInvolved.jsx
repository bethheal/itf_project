import { memberImage, patnerImage, volunteerImage } from "../../assets";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const sections = [
  {
    id: "membership",
    title: "BE A MEMBER",
    image: memberImage,
    description: "Submit your request to become a member",
    buttonText: "Become a Member",
  },
  {
    id: "volunteer",
    title: "BE A VOLUNTEER",
    image: volunteerImage,
    description: "Submit your request to become a volunteer",
    buttonText: "Become a Volunteer",
    reverse: true,
  },
  {
    id: "sponsor",
    title: "PARTNER WITH US",
    image: patnerImage,
    description: "Support our mission and be a sponsor",
    buttonText: "Partner with Us",
  },

  {
    id: "donate",
    title: "DONATE TO US",
    image: patnerImage,
    description: "Support our mission and donate",
    buttonText: "Donate",
  },
];

const GetInvolved = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="mt-20 px-6 md:px-20">
      <h4 className="font-bold text-3xl m-8 text-center">
        BE A PART OF THE FAMILY
      </h4>

      {sections.map(
        ({ id, title, image, description, buttonText, reverse }) => (
          <section key={id} id={id} className="py-10">
            <div
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } items-center bg-[#EFF6FF] p-6 md:p-10 rounded-lg shadow-lg`}
            >
              <img
                className="h-60 md:h-80 w-full md:w-1/2 object-cover rounded-lg"
                src={image}
                alt={title}
              />
              <div className="p-6 md:w-1/2 text-center md:text-left">
                <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
                <p className="text-gray-500 my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla dolor ex porro corporis fuga et, soluta fugit veritatis.
                </p>
                <p className="font-bold text-gray-500">{description}</p>
                <button className="relative mt-6 h-12 w-40 overflow-hidden border border-[#3d960b] bg-[#3d960b] text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-[#3d960b] hover:shadow-[#3d960b] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                  <span className="relative z-10">{buttonText}</span>
                </button>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default GetInvolved;
