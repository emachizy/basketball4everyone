import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import contactUsBg from "../assets/Img/contactUsBg.jpeg";
import LazyImage from "../components/LazyLoading";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <>
      <header>
        <div
          className="bg-gradient-to-tr from-gray-500 to-slate-950 h-[40vh] md:h-72 w-full relative"
          data-aos="fade-up"
        >
          <LazyImage
            src={contactUsBg}
            alt=" Contact Us Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <h1 className="text-4xl capitalize text-white font-bold text-center">
            Contact Us
          </h1>
        </div>
      </header>
      <section>
        <h1 className="text-4xl capitalize font-bold pt-20 pb-20 text-center px-4 md:px-0">
          We would love to hear from you.
        </h1>
        <div
          className="max-w-6xl flex flex-col md:flex-row justify-center gap-10 md:px0 px-10 mx-auto"
          data-aos="fade-up"
        >
          <div data-aos="fade-up w-full">
            <div className="bg-gray-100 shadow-md rounded p-8 flex flex-col gap-5">
              <p className="text-gray-500 max-w-lg text-md leading-loose">
                Have questions or want to get involved with Basketball4Everyone?
                Whether you&apos;re interested in volunteering, starting a
                career, or learning more about our programs, we&apos;d love to
                hear from you! Contact us today and join us in promoting
                inclusivity, teamwork, and healthy living through basketball.
                Let&apos;s make a difference together!
              </p>
              <div className="flex text-left gap-2">
                <FaLocationDot className="text-[#DA7600]" />
                <p className="text-[#DA7600]">
                  5, Bucknor Savage Boulevard Ogba, Lagos-Nigeria
                </p>
              </div>
              <div className="pt-5 flex gap-2">
                <MdEmail className="text-[#DA7600]" />
                <a
                  href="mailto:basketball4everyone@gmail.com"
                  className="text-[#DA7600]"
                >
                  Send Email
                </a>
              </div>
              <div className="py-5 flex gap-2">
                <FaPhoneAlt className="text-[#DA7600]" />
                <a href="tel:+234-8127709163" className="text-[#DA7600]">
                  +234-8127709163
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
        {/* </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Contact;
