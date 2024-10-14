import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ourProjectBg from "../assets/Img/ourProjectBg.jpeg";
import ourProjectImg1 from "../assets/Img/ourProjectImg1.jpeg";
import ourProjectImg2 from "../assets/Img/ourProjectImg2.jpeg";
import ourProjectImg3 from "../assets/Img/ourProjectImg3.jpeg";
import ourProjectImg4 from "../assets/Img/ourProjectImg4.jpeg";
import ourProjectImg5 from "../assets/Img/ourProjectImg5.jpeg";
import ourProjectImg6 from "../assets/Img/ourProjectImg6.jpeg";
import ourProjectImg7 from "../assets/Img/ourProjectImg7.jpeg";
import ourProjectImg8 from "../assets/Img/ourProjectImg8.jpeg";

const OurProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <>
      <header>
        <div
          className="bg-gradient-to-tr from-gray-500 to-slate-950 h-72 bg-cover bg-center w-full relative"
          data-aos="fade-up"
        >
          <img
            src={ourProjectBg}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <h1 className="text-4xl capitalize text-white font-bold pt-56 text-center">
            our project
          </h1>
        </div>
      </header>
      <main>
        <section
          className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 my-20"
          data-aos="fade-up"
        >
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg1}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Community thinking
            </figcaption>
          </figure>
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg2}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Basketball Practice
            </figcaption>
          </figure>
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg3}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Learning
            </figcaption>
          </figure>
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg4}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Life Skills
            </figcaption>
          </figure>
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg5}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Future oriented
            </figcaption>
          </figure>
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg6}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Mentorship
            </figcaption>
          </figure>
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg7}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Healthy Behaviors
            </figcaption>
          </figure>
          <figure
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={ourProjectImg8}
              alt=""
              className="object-cover select-none w-full h-72 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Leadership
            </figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurProject;
