import { memberImage, patnerImage, volunteerImage } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const sections = [
  {
    id: "membership",
    title: "BE A MEMBER",
    image: memberImage,
    description:
      "Become part of a supportive family that is passionate about making a difference. As a member, you’ll enjoy opportunities to grow, contribute, and connect with others who share your vision. Join us in building a stronger, more impactful community.",
    buttonText: "Become a Member",
    link: "https://forms.gle/KskCjghZVSwpNZC58",
  },
  {
    id: "volunteer",
    title: "BE A VOLUNTEER",
    image: volunteerImage,
    description:
      "Join our circle of changemakers. As a volunteer, you play a vital role in driving our mission forward whether by sharing your time, talents, or heart for service. There's a place for everyone, and your effort can spark real transformation in the lives of others.",
    buttonText: "Become a Volunteer",
    reverse: true,
    link: "https://forms.gle/fSgkHX9P5g7NC8wU6",
  },
  {
    id: "sponsor",
    title: "PARTNER WITH US",
    image: patnerImage,
    description:
      "Support us through strategic partnerships that amplify impact. As a partner, you help us reach more people, expand our initiatives, and create lasting change. Let’s work together to achieve meaningful goals that matter.",
    buttonText: "Partner with Us",
    link: "https://paystack.com/pay/czjsp38823",
  },
  {
    id: "donate",
    title: "DONATE TO US",
    image: patnerImage,
    description:
      "Every donation big or small helps us take one more step toward creating real change. Your generosity fuels our projects, supports our teams, and brings hope to those who need it most. Give today and be a part of something powerful.",
    buttonText: "Donate",
    link: "https://paystack.com/pay/czjsp38823",
  },
];

const GetInvolved = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
        ({ id, title, image, description, buttonText, reverse, link }) => (
          <section key={id} id={id} className="py-10">
            <div
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } items-center bg-[#EFF6FF] p-6 md:p-10 rounded-lg shadow-lg`}
            >
              <img
                className="h-60 md:h-80 w-full md:w-1/2 object-cover rounded-lg"
                src={image}
                loading ="lazy"

                alt={title}
              />
              <div className="p-6 md:w-1/2 text-center md:text-left">
                <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
                
                <p className="text-gray-500 my-4">{description}</p>
                <button
                  onClick={() => {
                    if (link.startsWith("http")) {
                      window.open(link, "_blank");
                    } else {
                      navigate(link);
                    }
                  }}
                  className="relative mt-6 h-12 w-40 overflow-hidden border border-[#3d960b] bg-[#3d960b] text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-[#3d960b] hover:shadow-[#3d960b] hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
                >
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
