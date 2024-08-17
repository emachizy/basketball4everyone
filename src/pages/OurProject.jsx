import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
            src="../src/assets/Img/ourProjectBg.jpeg"
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
          className="grid md:grid-cols-2 gap-10 container mx-auto my-20"
          data-aos="fade-up"
        >
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg1.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Community thinking
            </figcaption>
          </figure>
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg2.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Basketball Practice
            </figcaption>
          </figure>
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg3.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Learning
            </figcaption>
          </figure>
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg4.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Life Skills
            </figcaption>
          </figure>
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg5.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Future oriented
            </figcaption>
          </figure>
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg8.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Mentorship
            </figcaption>
          </figure>
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg7.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            />
            <figcaption className="text-gray-500 text-center">
              Healthy Behaviors
            </figcaption>
          </figure>
          <figure
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="../src/assets/Img/ourProjectImg6.jpeg"
              alt=""
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
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
