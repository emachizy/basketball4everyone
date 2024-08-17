// import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/Img/Logo.png";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import { Home } from "../pages/Home";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });
  return (
    <>
      {/* Footer section */}
      <footer className="mt-10" data-aos="fade-up">
        <section className="bg-black px-5" data-aos="fade-up">
          <div
            className="grid md:grid-cols-4 grid-cols-1 justify-items-center w-full py-10"
            data-aos="fade-up"
          >
            <div data-aos="fade-up" className="grid gap-4 justify-items-center">
              <img src={Logo} alt="logo" className="w-20" />
              <p className="text-[#DA7600]" data-aos="fade-up">
                From Streets to Stadium
              </p>
              {/* socials */}
              <div className="flex items-center gap-5" data-aos="fade-up">
                <FaFacebookSquare className="text-[#DA7600]" />
                <FaInstagram className="text-[#DA7600]" />
                <FaXTwitter className="text-[#DA7600]" />
                <FaYoutube className="text-[#DA7600]" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="grid justify-items-center text-center"
            >
              <h1
                className="text-2xl font-bold text-[#DA7600] capitalize pb-6"
                data-aos="fade-up"
              >
                Useful link
              </h1>
              <ul className="flex flex-col gap-y-5" data-aos="fade-up">
                <li>
                  <a href="/" className="text-[#DA7600]" data-aos="fade-up">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-[#DA7600]"
                    data-aos="fade-up"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/getInvolved"
                    className="text-[#DA7600]"
                    data-aos="fade-up"
                  >
                    Get Involved
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-[#DA7600]"
                    data-aos="fade-up"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/Donate"
                    className="text-[#DA7600]"
                    data-aos="fade-up"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid md:justify-items-start md:text-start text-center justify-items-center">
              <h1 className="text-[#DA7600] text-2xl font-bold capitalize pb-6">
                Contact
              </h1>
              <div
                data-aos="fade-up "
                className="md:block flex gap-2 justify-cente items-center"
              >
                <FaLocationDot className="text-[#DA7600]" />
                <p className="text-[#DA7600]">
                  5, Bucknor Savage Boulevard Ogba, Lagos-Nigeria
                </p>
              </div>
              <div
                className="pt-5 md:block flex gap-2 justify-center items-center"
                data-aos="fade-up"
              >
                <MdEmail className="text-[#DA7600]" />
                <a
                  href="mailto:basketball4everyone@gmail.com"
                  className="text-[#DA7600]"
                >
                  Send Email
                </a>
              </div>
              <div className="py-5 md:block flex gap-2 justify-center items-center">
                <FaPhoneAlt className="text-[#DA7600]" />
                <a href="tel:+234-8127709163" className="text-[#DA7600]">
                  +234-8127709163
                </a>
              </div>
            </div>
            {/* Stay up to date */}
            <div data-aos="fade-up" className="text-center">
              <h3
                className="text-2xl text-[#DA7600] capitalize font-bold pb-6"
                data-aos="fade-up"
              >
                Stay up to date
              </h3>
              <p className="text-[#DA7600] text-2xl py-5" data-aos="fade-up">
                Get latest periodic updates from us, our work and impact.
              </p>
              <form
                action=""
                className="flex flex-col gap-2"
                data-aos="fade-up"
              >
                <input
                  type="text"
                  placeholder="Full name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-[#da7600]"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  data-aos="fade-up"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-[#da7600]"
                />
                <button
                  type="submit"
                  className="bg-[#DA7600] text-white py-2 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-[#DA7600] text-white py-5 font-bold">
          <p className="text-center text-white">
            &copy; 2024 EmTech. All rights reserved
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
