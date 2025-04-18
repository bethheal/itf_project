import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import k from "../constants";
import { logo } from "../assets";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex text-white uppercase items-center justify-between bg-[#2D6A4F] px-4 sm:px-8 md:px-16 lg:px-28 py-4 fixed w-full top-0 z-50 shadow-md">
      {/* Logo */}
      <span className="w-10 sm:w-12 md:w-16 lg:w-12">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
      </span>

      {/* Hamburger for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`flex-col lg:flex lg:flex-row lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-[#2D6A4F] lg:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {k.NAVLINKS.map((nav, index) =>
          nav.navName === "Get Involved" ? (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  `block py-3 px-4 text-center lg:inline-block text-base font-medium transition duration-200 ${
                    isActive
                      ? "text-[#FFD166]"
                      : "hover:text-[#FFD166] text-white"
                  }`
                }
              >
                {nav.navName}
                <MdArrowDropDown className="inline-block ml-1 text-xl" />
              </NavLink>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  {[
                    { name: "Member", path: "/getInvolved#membership" },
                    { name: "Volunteer", path: "/getInvolved#volunteer" },
                    { name: "Partner with Us", path: "/getInvolved#sponsor" },
                  ].map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-[#2D6A4F] hover:bg-gray-100 transition"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={index}
              to={nav.path}
              className={({ isActive }) =>
                `block py-3 px-4 text-center lg:inline-block text-base font-medium transition duration-200 ${
                  isActive
                    ? "text-[#FFD166]"
                    : "hover:text-[#FFD166] text-white"
                }`
              }
            >
              {nav.navName}
            </NavLink>
          )
        )}

        {/* Donate Button */}
        <div className="mt-4 lg:mt-0 flex justify-center lg:justify-start w-full lg:w-auto lg:ml-6">
          <a
            href="https://paystack.com/pay/czjsp38823"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD166] text-[#2D6A4F] font-semibold px-5 py-2 rounded-lg hover:bg-[#f2c14e] transition"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
