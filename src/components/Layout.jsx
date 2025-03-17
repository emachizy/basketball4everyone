import { Outlet, Link, NavLink } from "react-router-dom";
import Logo from "../assets/Img/Logo.png";
import Donate from "./Donate";
import { useState, useEffect, useRef } from "react";
import BecomeAVolunteer from "./BecomeAVolunteer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to track dropdown element

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="my-2 flex items-center justify-between rounded px-4 py-6 shadow-2xl sticky top-0 bg-white z-50">
        <div className="flex">
          <Link to="/">
            <img src={Logo} alt="Basketball4everyone Logo" className="w-16" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#da7600]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#da7600]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="md:flex justify-between items-center hidden">
          <div className="flex gap-6 justify-center items-center">
            <NavLink
              to="/"
              className="relative group font-bold hover:text-gray-600"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#da7600] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            {/* About Us with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-1">
                <NavLink
                  to="about"
                  className="relative group font-bold hover:text-gray-600"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#da7600] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="text-[#da7600] focus:outline-none"
                >
                  {isOpen ? "▲" : "▼"}
                </button>
              </div>
              {isOpen && (
                <div className="absolute left-0 mt-2 w-36 bg-white shadow-lg rounded-md py-2 z-10 border-t-2 border-[#da7600]">
                  <NavLink
                    to="ourProject"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Projects
                  </NavLink>
                  <NavLink
                    to="meetTheTeam"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Team
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="getInvolved"
              className="relative group font-bold hover:text-gray-600"
            >
              Get Involved
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#da7600] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="contactUs"
              className="relative group font-bold hover:text-gray-600"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#da7600] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="flex flex-col w-full gap-4 justify-center items-left absolute left-0 top-20 bg-white shadow-lg py-2 z-10 border-2 border-t-[#da7600] origin-top animate-open-menu md:hidden"
            aria-label="mobile"
          >
            <NavLink
              to="/"
              className="border-b-2 w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className="border-b-2 w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="ourProject"
              className="border-b-2 w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </NavLink>
            <NavLink
              to="meetTheTeam"
              className="border-b-2 w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </NavLink>
            <NavLink
              to="getInvolved"
              className="border-b-2 w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </NavLink>
            <NavLink
              to="contactUs"
              className="border-b-2 w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <Link
              to="donate"
              className="w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <Donate />
            </Link>
            <Link
              to="volunteer"
              className="w-full text-left pl-6 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <BecomeAVolunteer />
            </Link>
          </div>
        )}
        <div className="hidden md:block">
          <Link to="volunteer">
            <BecomeAVolunteer />
          </Link>
        </div>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="donate">
            <Donate />
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
