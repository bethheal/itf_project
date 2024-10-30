import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import k from "../constants";
import { logo } from '../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-cyan-200 px-4 sm:px-8 md:px-16 lg:px-28 py-4 fixed w-full top-0">
      {/* Logo */}
      <span className="w-10 sm:w-12 md:w-16 lg:w-20">
        <img src={logo} alt="logo" onClick={() => navigate("/")} className='cursor-pointer' />
      </span>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`flex-col lg:flex lg:flex-row lg:items-end   absolute lg:static w-full lg:w-auto left-0 top-16 lg:top-0 transition-all duration-300 bg-cyan-200 ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        {k.NAVLINKS.map((nav, index) => (
          <Link
            key={index}
            to={nav.path}
            className="block py-2 px-4 text-center lg:inline-block hover:bg-cyan-300 transition text-sm sm:text-base md:text-lg lg:text-xl"
          >
            {nav.navName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
