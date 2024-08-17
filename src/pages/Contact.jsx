import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import contactUsBg from "../assets/Img/contactUsBg.jpeg";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <>
      <body>
        <header>
          <div
            className="bg-gradient-to-tr from-gray-500 to-slate-950 h-72 bg-cover bg-center w-full relative"
            data-aos="fade-up"
          >
            <img
              src={contactUsBg}
              alt=""
              className="w-full h-full object-cover absolute mix-blend-overlay"
            />
            <h1 className="text-4xl capitalize text-white font-bold pt-56 text-center">
              Contact Us
            </h1>
          </div>
        </header>
        <section>
          <h1 className="text-4xl capitalize font-bold pt-20 pb-20 text-center">
            We would love to hear from you.
          </h1>
          <div
            className="grid md:grid-cols-2 gap-5 md:px0 px-10 container mx-auto"
            data-aos="fade-up"
          >
            <div data-aos="fade-up">
              <p className="text-gray-500 pt-5">
                Have questions or want to get involved with Basketball4Everyone?
                Whether you&apos;re interested in volunteering, starting a
                career, or learning more about our programs, we&apos;d love to
                hear from you! Contact us today and join us in promoting
                inclusivity, teamwork, and healthy living through basketball.
                Let&apos;s make a difference together!
              </p>
              <div className="pt-10">
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-[#DA7600]" />
                  <p className="text-[#DA7600]">
                    5, Bucknor Savage Boulevard Ogba, Lagos-Nigeria
                  </p>
                </div>
                <div className="pt-5 flex items-center gap-2">
                  <MdEmail className="text-[#DA7600]" />
                  <a
                    href="mailto:basketball4everyone@gmail.com"
                    className="text-[#DA7600]"
                  >
                    Send Email
                  </a>
                </div>
                <div className="py-5 flex items-center gap-2">
                  <FaPhoneAlt className="text-[#DA7600]" />
                  <a href="tel:+234-8127709163" className="text-[#DA7600]">
                    +234-8127709163
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <ContactForm />
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default Contact;
