// import React from 'react'

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import getInvolvedImg1 from "../assets/Img/getInvolvedImg1.png";
import getInvolvedImg2 from "../assets/Img/getInvolvedImg2.jpeg";
import sendAMessage from "../assets/Img/sendAMessage.jpeg";

const GetInvolved = () => {
  return (
    <>
      <header>
        <div className="bg-gradient-to-tr from-gray-500 to-slate-950 h-72 bg-cover bg-center w-full relative">
          <img
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
        <section className="w-full container mx-auto">
          <h1 className="text-4xl font-bold text-center py-10 capitalize">
            Join us today
          </h1>
          <div className="md:flex items-center justify-center gap-10 md:px-0 px-4 ">
            <p className="flex-initial md:w-[40%] md:pt-0 pt-10 text-center text-xl md:pb-0 pb-10">
              Volunteering for Basketball4Everyone is a great way to make a
              positive impact in our community. Your time and skills can help
              promote inclusivity, teamwork, and healthy lifestyles through
              basketball. Whether coaching, organizing outreaches, or supporting
              participants, you&apos;ll contribute to a positive environment and
              inspire others. Join us in making basketball accessible and
              enjoyable for everyone!
            </p>
            <img
              src={getInvolvedImg1}
              alt=""
              className="flex-initial md:w-[60%]"
            />
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-10 md:px-0 px-4 container mx-auto my-10">
            <img
              src={getInvolvedImg2}
              alt=""
              className="flex-initial md:w-[60%] rounded"
            />
            <p className="flex-initial md:w-[40%] pt-20 text-center text-xl">
              Volunteering for Basketball4Everyone is a great way to make a
              positive impact in our community. Your time and skills can help
              promote inclusivity, teamwork, and healthy lifestyles through
              basketball. Whether coaching, organizing outreaches, or supporting
              participants, you&apos;ll contribute to a positive environment and
              inspire others. Join us in making basketball accessible and
              enjoyable for everyone!
            </p>
          </div>
        </section>
        <section>
          <div className="flex justify-center gap-24 items-center container mx-auto my-10">
            <ContactForm />
            <div className="hidden md:block">
              <img
                src={sendAMessage}
                alt=""
                className="self-center w-full h-[500px] rounded mx-1"
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
