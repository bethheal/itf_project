import React from "react";
import { aboutPageHead } from "../../assets";
import "./auraText.css";
import CountUpComponent from "./countAnimation/countUp";


const About = () => {
  return (
    <div className="relative my-20 w-full">
      {/* Header Section */}
      <img
        src={aboutPageHead}
        alt="about image"
        className="h-[50vh] w-full object-cover my-20"
      />
      <div className="absolute inset-0 text-white font-semibold text-8xl bg-black h-[70vh] bg-opacity-80">
        <div className="content m-40">
          <h1 className="title">
            ABOUT US
            <div className="aurora">
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </div>
          </h1>
        </div>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="flex justify-center items-center p-10 bg-gray-100">
        <div className="max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Text Section */}
            <div className="p-10 flex-1">
              <h3 className="text-3xl font-bold mb-4">About the Foundation</h3>
              <h5 className="text-2xl mb-4 text-gray-700">
                We Are On A Mission To Help the Youth
              </h5>
              <p className="text-gray-600 text-justify leading-relaxed">
                ITF is ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati consequuntur deserunt est dolorum voluptas, similique
                tenetur minima placeat, ad perspiciatis blanditiis adipisci
                laboriosam incidunt harum rerum, aspernatur rem. Porro, aut?
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="flex-1 m-10">
              <p className="text-gray-600 text-justify pb-5 leading-relaxed">
                Our Mission is Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Obcaecati consequuntur deserunt est dolorum
                voluptas, similique tenetur minima placeat, ad perspiciatis
                blanditiis adipisci laboriosam incidunt harum rerum, aspernatur
                rem. Porro, aut?
              </p>
              <p className="text-gray-600 text-justify pb-5 leading-relaxed">
                Our Vision is Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Obcaecati consequuntur deserunt est dolorum
                voluptas, similique tenetur minima placeat, ad perspiciatis
                blanditiis adipisci laboriosam incidunt harum rerum, aspernatur
                rem. Porro, aut?
              </p>
              <p className="text-gray-600 text-justify leading-relaxed">
                Our Values are ipsum dolor sit, amet consectetur adipisicing
                elit. Obcaecati consequuntur deserunt est dolorum voluptas,
                similique tenetur minima placeat, ad perspiciatis blanditiis
                adipisci laboriosam incidunt harum rerum, aspernatur rem. Porro,
                aut?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History and Background Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6 text-blue-900">Our Journey</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            The foundation was born from a simple idea: making a difference.
            Over the years, we have transformed challenges into opportunities,
            creating a brighter future for countless youth. Here's a glimpse
            into our story.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Timeline Block 1 */}
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold mb-3 text-blue-800">
                2023: The Beginning
              </h4>
              <p className="text-gray-600">
                It all started with a small group of passionate individuals who
                wanted to create change. The foundation's first initiative
                focused on local community projects.
              </p>
            </div>

            {/* Timeline Block 2 */}
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold mb-3 text-blue-800">
                2024: Expanding Reach
              </h4>
              <p className="text-gray-600">
                Our mission is growing, and we expanded our reach to schools,
                impacting hundreds of lives through education and mentorship
                programs.
              </p>
            </div>

            {/* Timeline Block 3 */}
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold mb-3 text-blue-800">
                2030: Looking Ahead
              </h4>
              <p className="text-gray-600">
                Today, we continue to grow, with a vision of impacting thousands
                more through innovative programs and partnerships.
              </p>
            </div>
          </div>

          <p className="mt-10 text-gray-600">
            Our history is a testament to what passion and commitment can
            achieve. Join us as we write the next chapter of our journey.
          </p>
        </div>
      </div>

    
      <div className="bg-img bg-center bg-fixed bg-cover w-screen h-[60vh] relative">
  <div className="absolute top-40 left-0 right-0 w-screen h-[40vh] bg-[#3f9510] opacity-90 z-10">
    <CountUpComponent/>
  </div>

</div>

    </div>
  );
};

export default About;
