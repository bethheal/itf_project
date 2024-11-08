import k from "../../../constants";
// import "../../App.css"; // Import the CSS file
import { about1, about2 } from "../../../assets";
import "../../../App.css"

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center my-8 h-auto w-full bg-[#A5F3FC]">
        <div className="m-8 font-semibold">
          <h3 className="text-[#3F9510] text-xl">What we do</h3>
          <h1 className="text-3xl md:text-5xl m-3">
            Our Mission is to Help the Youth
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mx-4 md:mx-40 p-10 gap-4">
          {k.PURPOSE.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.bgColor }}
              className={`slide-hover w-full sm:w-[48%] md:w-[30%] p-6 mx-2 transition duration-800 ease-in-out rounded-lg
              hover:-translate-y-6 ${index !== 1 ? "hover:scale-105" : ""}`}
            >
              <div className="text-center slide-hover-content">
                <p
                  style={{ backgroundColor: item.iconBg }}
                  className="inline-block p-5 rounded-full text-3xl icon-bg-hover transition duration-500 ease-in-out"
                >
                  {item.icon}
                </p>
                <p className="p-4 font-semibold">{item.title}</p>
                <p className="p-4 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly my-16 md:my-96 mx-4 md:mx-0">
        <div className="bg-white flex flex-col w-full md:w-1/2 mx-4 md:mx-40 mb-4 md:mb-0">
          <p className="text-[#3F9510] text-xl py-10">About the Foundation</p>
          <span className="text-3xl md:text-5xl py-5">
            We Are In A Mission To Help the Youth
          </span>
          <span className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor
            incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud
            exercitation ullamc.
          </span>
          <span className="py-11">
            Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod
            tempor incididunt ut labore et dolore
          </span>

          <span className="mt-5">
            <button className="relative h-[50px] w-40 overflow-hidden border border-[#3d960b] bg-white text-[#3d960b] shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-[#3d960b] hover:before:w-2/4 hover:before:bg-[#3d960b] hover:after:w-2/4 hover:after:bg-[#3d960b]">
              <span className="relative z-10">LEARN MORE</span>
            </button>
          </span>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={about1} alt="About Image 1" className="w-1/2 mb-4 md:mb-0" />
          {/* Render about2 only on medium screens and larger */}
          <img src={about2} alt="About Image 2" className="hidden md:block w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
