import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import k from "../../../constants";
import { about1, about2 } from "../../../assets";
import "../../../App.css";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Mission Statement Section */}
      <motion.div
        className="bg-white flex flex-col justify-center text-center my-8 h-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="m-8 font-semibold">
          <motion.h3
            className="text-[#3F9510] text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            What we do
          </motion.h3>
          <motion.h1
            className="text-3xl md:text-5xl m-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our Mission is to Help the Youth
          </motion.h1>
        </div>

        {/* Purpose Cards */}
        <motion.div
          className="flex flex-wrap justify-center mx-4 md:mx-40 p-10 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {k.PURPOSE.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -20,
                scale: index !== 1 ? 1.05 : 1,
                transition: { type: "spring", stiffness: 300 },
              }}
              style={{ backgroundColor: item.bgColor }}
              className="slide-hover w-full sm:w-[48%] md:w-[30%] p-6 mx-2 transition duration-800 ease-in-out rounded-lg"
            >
              <div className="text-center slide-hover-content">
                <motion.p
                  style={{ backgroundColor: item.iconBg }}
                  className="inline-block p-5 rounded-full text-3xl icon-bg-hover transition duration-500 ease-in-out"
                >
                  {item.icon}
                </motion.p>
                <p className="p-4 font-semibold">{item.title}</p>
                <p className="p-4 text-xs">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* About the Foundation Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-evenly my-44 md:my-20 mx-4 md:mx-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <motion.div
          className="flex flex-col w-full md:w-1/2 mx-4 md:mx-40 mb-4 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3F9510] text-xl py-10">About the Foundation</p>
          <span className="text-3xl md:text-5xl py-5">
            We Are In A Mission To Help the Youth
          </span>
          <span className="py-10">
            We’re not just guiding the youth we’re walking beside them. Through
            every challenge, every dream, and every breakthrough, we stand as a
            bridge to brighter tomorrows. We’re building more than support
            systems we’re nurturing young minds to lead, uplift others, and
            create lasting change in their communities.
          </span>

          <span className="mt-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/aboutUs")}
              className="relative h-[50px] w-40 overflow-hidden border border-[#3d960b] bg-white text-[#3d960b] shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-[#3d960b] hover:before:w-2/4 hover:before:bg-[#3d960b] hover:after:w-2/4 hover:after:bg-[#3d960b]"
            >
              <span className="relative z-10">LEARN MORE</span>
            </motion.button>
          </span>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={about1}
            loading ="lazy"
            alt="About Image 1"
            className="w-1/2 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={about2}
            loading ="lazy"
            alt="About Image 2"
            className="hidden md:block w-1/2"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
