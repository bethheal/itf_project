import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import k from "../constants";
import { logo } from '../assets';
import { MdArrowDropDown } from 'react-icons/md'; // Import the dropdown icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();

  return (
    <div className="flex drop-shadow-lg items-center justify-between bg-[#3C970D] px-4 sm:px-8 md:px-16 lg:px-28 py-4 fixed w-full top-0 z-50">
      {/* Logo */}
      <span className="w-10 sm:w-12 md:w-16 lg:w-10">
        <img 
          src={logo} 
          alt="logo" 
          onClick={() => navigate("/")} 
          className="cursor-pointer" 
        />
      </span>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg 
            className="w-6 h-6" 
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
        className={`flex-col lg:flex lg:flex-row lg:items-end absolute lg:static w-full lg:w-auto left-0 lg:top-0 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}
      >
        {k.NAVLINKS.map((nav, index) => (
          nav.navName === "Get Involved" ? (
            // Dropdown for "Get Involved"
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink
                to={nav.path}
                className={({ isActive }) => 
                  `block py-2 px-4 text-center lg:inline-block text-sm sm:text-base md:text-lg lg:text-xl transition ${isActive ? 'text-[#FB75FA] font-normal' : 'hover:text-[#FB75FA] font-normal'}` 
                }
              >
                {nav.navName}
                <MdArrowDropDown className="inline-block " /> 
              </NavLink>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
                  <NavLink
                    to="/getInvolved#membership"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#FB75FA]"
                  >
                    Member
                  </NavLink>
                  <NavLink
                    to="/getInvolved#volunteer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#FB75FA]"
                  >
                    Volunteer
                  </NavLink>
                  <NavLink
                    to="/getInvolved#sponsor"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#FB75FA]"
                  >
                    Partner with Us
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={index}
              to={nav.path}
              className={({ isActive }) => 
                `block py-2 px-4 text-center lg:inline-block text-sm sm:text-base md:text-lg lg:text-xl transition ${isActive ? 'text-[#FB75FA] font-normal' : 'hover:text-[#FB75FA] font-normal'}` 
              }
            >
              {nav.navName}
            </NavLink>
          )
        ))}
      </div>
    </div>
  );
};

export default Navbar;
