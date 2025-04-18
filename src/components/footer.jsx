import { logo } from "../assets";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#2D6A4F] text-[#D8F3DC] pt-12 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 pb-12">
        {/* Logo & Tagline */}
        <div>
          <img src={logo} alt="Logo" className="h-14 mb-4" />
          <p className="text-[#B7E4C7] text-sm">
            Our First Service To God.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Get In Touch</h3>
          <ul className="text-[#B7E4C7] space-y-2 text-sm">
            <li>
              <i className="fa fa-map-marker mr-2"></i>Westhils, Accra, Ghana
            </li>
            <li>
              <i className="fa fa-phone mr-2"></i>(+233) 20 448 5592 / 55 132 3874 / 53 968 1038
            </li>
            <li>
              <i className="fa fa-envelope mr-2"></i>integrity.trust24@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="text-[#B7E4C7] space-y-2 text-sm">
            <li><a href="/about" className="hover:text-[#F7B801] transition">About Us</a></li>
            <li><a href="/projects" className="hover:text-[#F7B801] transition">Our Projects</a></li>
            <li><a href="/donate" className="hover:text-[#F7B801] transition">Donate</a></li>
            <li><a href="/contact" className="hover:text-[#F7B801] transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4 text-white text-xl">
            <a href="https://www.tiktok.com/@itf.gh" className="hover:text-[#F7B801] transition"><i className="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/integritytrust" className="hover:text-[#F7B801] transition"><i className="fa fa-instagram"></i></a>
            <a href="#" className="hover:text-[#F7B801] transition"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between text-center gap-4 mb-10">
        <div className="lg:max-w-md">
          <h2 className="text-xl lg:text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
          <p className="text-[#B7E4C7] text-sm mt-1">
            Get the latest stories and updates from Integrity Trust Foundation.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black focus:outline-none min-w-[200px]"
            required
          />
          <button
            type="submit"
            className="px-5 py-2 bg-[#F7B801] text-[#2D6A4F] font-semibold rounded-md hover:bg-[#f4a700] transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#F7B801] pt-4 pb-6 text-center text-[#B7E4C7] text-sm">
        &copy; {new Date().getFullYear()} LiT. All rights reserved. |{" "}
        <a href="/privacy" className="hover:underline hover:text-white transition">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
