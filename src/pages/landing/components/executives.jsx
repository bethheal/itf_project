import React from "react";
import k from "../../../constants";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Executives = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col w-full"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center sm:text-left mx-auto sm:mx-10 md:mx-20 my-10 max-w-5xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center my-12">
          <p className="text-[#3F9510] text-xl sm:text-2xl font-semibold">
            Our Executives
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Our Expert Executives
          </p>
        </div>
      </motion.div>

      {/* Executive Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 px-4 sm:px-10 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {k.EXECUTIVES.map((item, index) => (
          <motion.div
            custom={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.15 },
              },
            }}
            key={index}
            className="group relative bg-white h-96 w-full sm:w-64 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-60 overflow-hidden">
              <motion.img
                src={item.image.props.src}
                loading ="lazy"
                alt={item.image.props.alt}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200"
                >
                  {item.linkedin}
                </a>
                <a
                  href={item.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200"
                >
                  {item.twitter}
                </a>
              </div>
            </div>
            <p className="font-semibold text-black mt-2 text-center">
              {item.name}
            </p>
            <p className="text-gray-600 text-center text-sm">{item.position}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Volunteer CTA Section */}
      <motion.div
        className="relative w-full h-[25rem] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[#3f9510] opacity-60 z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-28 py-16 gap-8">
          <motion.p
            className="text-white font-extrabold text-2xl sm:text-3xl text-center sm:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            LET'S CHANGE THE WORLD
          </motion.p>

          <motion.a
            href="https://forms.gle/fSgkHX9P5g7NC8wU6"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[50px] w-72 sm:w-96 overflow-hidden border border-[#caf4f8] bg-white px-3 font-bold shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#3d960b] before:transition-all before:duration-500 hover:text-white hover:shadow-[#3d960b] hover:before:left-0 hover:before:w-full text-center flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="relative z-10">BECOME A VOLUNTEER</span>
          </motion.a>
        </div>

        <div className="bg-img bg-center bg-fixed bg-cover w-full h-full"></div>
      </motion.div>
    </motion.div>
  );
};

export default Executives;
