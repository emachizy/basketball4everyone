// import React from 'react'

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import getInvolvedImg1 from "../assets/Img/getInvolvedImg1.png";
import getInvolvedImg2 from "../assets/Img/getInvolvedImg2.jpeg";
import sendAMessage from "../assets/Img/sendAMessage.jpeg";
import { Link } from "react-router-dom";
import BecomeAVolunteer from "../components/BecomeAVolunteer";
import LazyImage from "../components/LazyLoading";

const GetInvolved = () => {
  return (
    <>
      <header>
        <div className="bg-gradient-to-tr from-gray-500 to-slate-950 h-72 bg-cover bg-center w-full relative">
          <LazyImage
            src={sendAMessage}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <h1 className="text-4xl capitalize text-white font-bold pt-56 text-center">
            Get Involved
          </h1>
        </div>
      </header>
      <main>
        <section className="w-full container max-w-6xl mx-auto mt-6">
          <div className="text-center">
            <Link to="/volunteer">
              <BecomeAVolunteer />
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-center py-10 capitalize">
            Join us today
          </h1>

          {/* First Section */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:px-0 px-4">
            <p className="w-full md:w-1/2 text-xl min-h-[400px] flex items-center justify-center">
              Volunteering for Basketball4Everyone is a great way to make a
              positive impact in our community. Your time and skills can help
              promote inclusivity, teamwork, and healthy lifestyles through
              basketball. Whether coaching, organizing outreaches, or supporting
              participants, you&apos;ll contribute to a positive environment and
              inspire others. Join us in making basketball accessible and
              enjoyable for everyone!
            </p>
            <div className="w-full md:w-1/2 h-full overflow-hidden">
              <LazyImage
                src={getInvolvedImg1}
                alt="Volunteer Image"
                className="w-full object-cover max-h-96 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-wrap md:flex-nowrap flex-row-reverse items-center gap-10 md:px-0 px-4 container mx-auto my-10">
            <p className="w-full md:w-1/2 text-xl min-h-[400px] flex items-center justify-center">
              Volunteering for Basketball4Everyone is a great way to make a
              positive impact in our community. Your time and skills can help
              promote inclusivity, teamwork, and healthy lifestyles through
              basketball. Whether coaching, organizing outreaches, or supporting
              participants, you&apos;ll contribute to a positive environment and
              inspire others. Join us in making basketball accessible and
              enjoyable for everyone!
            </p>
            <div className="w-full h-full md:w-1/2 overflow-hidden">
              <LazyImage
                src={getInvolvedImg2}
                alt="Volunteer Image"
                className="w-full object-cover max-h-96 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="flex justify-center gap-24 items-center container mx-auto my-10 max-w-6xl">
            <ContactForm />
            <div className="hidden md:block w-1/2 h-[400px] overflow-hidden">
              <LazyImage
                src={sendAMessage}
                alt="Contact Us"
                className="w-50 object-cover h-50 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default GetInvolved;
