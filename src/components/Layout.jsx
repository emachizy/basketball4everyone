import { Outlet, Link, NavLink } from "react-router-dom";
import Logo from "../assets/Img/Logo.png";
import Donate from "./Donate";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //     if (isMenuOpen) {
  //       setIsMenuOpen(false);
  //     }
  //   }; // Attach the event listener when the component mounts

  //   document.addEventListener("click", handleClickOutside); // Clean up the event listener when the component unmounts

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [isMenuOpen]);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-6">
        <div className="flex">
          <Link to="/">
            <img src={Logo} alt="" className="w-16" />
          </Link>
        </div>

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
        <div className="md:flex justify-between items-center hidden">
          <div className="flex gap-6 justify-center items-center">
            <NavLink
              to="/"
              className={` ${(isActive) => (isActive ? "active" : "")}
                relative group font-bold hover:text-gray-600
              `}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#da7600] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="about"
              className="relative group font-bold hover:text-gray-600"
            >
              About Us{" "}
              <span
                onClick={() => setIsOpen((prev) => !prev)}
                className="m-0 p-0 gap-0"
              >
                {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#da7600] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            {/* nav dropdown */}
            {isOpen && (
              <div className="flex flex-col w-36 gap-4 justify-center items-center absolute right-96 bg-white shadow-lg py-2 mt-32 z-10 border-2 border-t-[#da7600]">
                <NavLink
                  to="ourProject"
                  className="border-b-2 w-full text-center"
                >
                  Our Projects
                </NavLink>
                <NavLink
                  to="meetTheTeam"
                  className="border-b-2 w-full text-center"
                >
                  Our Team
                </NavLink>
              </div>
            )}
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
              Contact Us{" "}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#da7600] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <div>
              <Link to="donate">
                <Donate />
              </Link>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        {isMenuOpen && (
          <div
            className="flex flex-col w-full gap-4 justify-center items-left absolute right-0 bg-white shadow-lg py-2 mt-96 z-10 border-2 border-t-[#da7600] origin-top animate-open-menu"
            aria-label="mobile"
          >
            <NavLink
              to="/"
              className="border-b-2 w-full text-left pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className="border-b-2 w-full text-left pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="ourProject"
              className="border-b-2 w-full text-left pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </NavLink>
            <NavLink
              to="meetTheTeam"
              className="border-b-2 w-full text-left pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </NavLink>
            <NavLink
              to="getInvolved"
              className="border-b-2 w-full text-left pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </NavLink>
            <NavLink
              to="contactUs"
              className="border-b-2 w-full text-left pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <Link to="donate" onClick={() => setIsMenuOpen(false)}>
              <Donate />
            </Link>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
