import { logo } from "../assets";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#439812] text-[#73F1E9]  pt-12 px-[6.5rem] sm:px-[6.5rem]">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 pb-12">
        {/* Logo & Tagline */}
        <div>
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <p className="text-gray-300">
            Empowering Adolescents through education and support.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <i className="fa fa-map-marker mr-2"></i>Sarbet, Addis Ababa, Ethiopia
            </li>
            <li>
              <i className="fa fa-phone mr-2"></i>(+251) 913 4***30
            </li>
            <li>
              <i className="fa fa-envelope mr-2"></i>sammytg66@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Our Projects
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-[#F401F6] transition duration-300">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#F401F6] transition duration-300">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#F401F6] transition duration-300">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#F401F6] transition duration-300">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="w-full flex justify-center items-center mb-9 mt-4">
        <form className="flex flex-col lg:flex-row items-center gap-4">
          <h2 className="text-xl lg:text-2xl font-semibold whitespace-nowrap">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 whitespace-nowrap">
            Get the latest stories and updates from Integrity Trust Foundation.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-[200px] px-4 py-2 rounded-md text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-cyan-900 font-semibold rounded-md hover:bg-gray-200 transition duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#F401F6] pt-4 pb-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} LiT. All rights reserved. |{" "}
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
