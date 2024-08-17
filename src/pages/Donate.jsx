import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Img1 from "../assets/Img/Img1.png";
import donateBg from "../assets/Img/donateBg.jpeg";

const Donate = () => {
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
              src={donateBg}
              alt=""
              className="w-full h-full object-cover absolute mix-blend-overlay"
            />
            <h1 className="text-4xl capitalize text-white font-bold pt-56 text-center">
              Donate To Us
            </h1>
          </div>
        </header>
        <section>
          <div
            className="md:flex gap-16 container mx-auto pt-20"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-y-4 flex-initial md:w-[40%] pt-10 text-center md:text-left">
              <h1 className="text-4xl capitalize font-bold ">
                Make a Donation
              </h1>
              <p>
                Support Basketball4Everyone by making a donation today! Your
                contribution helps promote inclusivity, teamwork, and healthy
                living through basketball. Every bit counts in making a
                difference. Thank you for your generosity
              </p>
              <button className="bg-[#DA7600] text-white px-10 py-2 rounded-md text-center capitalize">
                make a donation
              </button>
            </div>
            <div className="flex-initial md:w-[60%]" data-aos="fade-up">
              <img src={Img1} alt="Image" className="h-4/5" />
            </div>
          </div>
          <div
            className="md:flex justify-center items-center gap-10 container mx-auto"
            data-aos="fade-up"
          >
            <div className="bg-gradient-to-r  to-slate-950 from-[#da7600] flex-initial md:w-[60%] rounded p-4 shadow-2xl text-center">
              <h3 className="text-xl text-white">Please find details below:</h3>
              <p className="text-white pt-5">
                Account Name: Basketball4Everyone Initiative
              </p>
              <p className="text-white pt-5">
                Account Number: <br /> 8127709163 (NGN)
              </p>
              <p className="text-white pt-5">Bank Name: Opay</p>

              <p className="text-white pt-5">
                You can write a check to the name of <br />{" "}
                &quot;Basketball4Everyone&quot;
              </p>
            </div>
            <div className="flex-initial md:w-[40%]" data-aos="fade-up">
              <p className="text-center text-gray-500">
                Support Basketball4Everyone by making a donation today! Your
                generosity helps us promote inclusivity, teamwork, and healthy
                living through the sport of basketball. Every contribution, big
                or small, makes a significant impact in our mission to bring the
                joy of basketball to everyone. Thank you for helping us make a
                difference in our community!
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default Donate;
