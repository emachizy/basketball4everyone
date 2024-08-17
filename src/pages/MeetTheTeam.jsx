import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import meetTheteamBg from "../assets/Img/meetTheteamBg.jpeg";
import ajayi from "../assets/Img/ajayi.jpeg";
import ayomide from "../assets/Img/ayomide.jpeg";
import daniel from "../assets/Img/daniel.jpeg";
import emmanuel from "../assets/Img/emmanuel.jpeg";
import obiozor from "../assets/Img/obiozor.jpeg";
import pascal from "../assets/Img/pascal.jpeg";
import richard from "../assets/Img/richard.jpeg";
import riskat from "../assets/Img/riskat.jpeg";
import samson from "../assets/Img/samson.jpeg";
import yetunde from "../assets/Img/yetunde.jpeg";

const MeetTheTeam = () => {
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
            src={meetTheteamBg}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <h1 className="text-4xl capitalize text-white font-bold pt-56 text-center">
            Meet the team
          </h1>
        </div>
      </header>
      <main>
        <section
          className="md:flex justify-between items-center container mx-auto w-full gap-10 my-20 rounded-lg shadow-md overflow-hidden p-4"
          data-aos="fade-up"
        >
          <figure>
            <img src={obiozor} alt="Obiozor" className="rounded" />
            <figcaption className="text-gray-500 pt-2 font-bold">
              Onyeka Obiozo
            </figcaption>
            <figcaption className="text-gray-500">Founder / CEO</figcaption>
          </figure>
          <p className="md:pt-0 pt-5 text-gray-500">
            As a young lad growing up in the bustling city of Lagos, I used to
            see the big boys in the estate I lived play basketball. My first
            exposure was with Kareem Abdul Jabar, then Michael Jordan, Hakeem
            Olajuwon and Kobe Bryant. I really wanted to be a pro basketballer
            in the NBA but the hope was dashed due to some circumstances. Long
            walks to the stadium with my friends, lack of access to facilities
            and mentorship made me turned my attention to other aspects of life.
            I have kept on with the game and spirit of basketball till date, I
            just may not be in the NBA as a pro basketballer but I can do
            something about making such dreams for other African kids by
            providing safe spaces, education, facilities and access to sport
            materials to help them attain their dreams and make meaningful
            decisions in the future. This is my story before
            Basketball4Everyone.
          </p>
        </section>
        <section className="my-20 p-4 md:mx-0 mx-5" data-aos="fade-up">
          <h1 className="text-4xl text-center font-bold py-10 capitalize">
            meet the team
          </h1>
          <div className="md:grid grid-cols-3 container mx-auto w-full gap-10">
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={pascal}
                alt="Pascal Epere image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Epere Paschal
              </figcaption>
              <figcaption className="text-gray-500">
                Executive Director
              </figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={ajayi}
                alt="Ajayi Samuel image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Samuel Ajayi
              </figcaption>
              <figcaption className="text-gray-500">
                Programs Manager/ Coach
              </figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={yetunde}
                alt="Yetunde image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Yetunde Ogunyemi
              </figcaption>
              <figcaption className="text-gray-500">
                HR & Admin Manager
              </figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={samson}
                alt="Emmanuel Samson image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Emmanuel Samson
              </figcaption>
              <figcaption className="text-gray-500">
                Monitoring and Evaluation Coordinator/ Coach
              </figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={ayomide}
                alt="Ayomide Eleboda image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Ayomide Eleboda
              </figcaption>
              <figcaption className="text-gray-500">
                Outreach Manager
              </figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={richard}
                alt="Richard Obiozo image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Richard Obiozo
              </figcaption>
              <figcaption className="text-gray-500">Finance Officer</figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={emmanuel}
                alt="Emmanuel Nwankwo image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Emmanuel Nwankwo
              </figcaption>
              <figcaption className="text-gray-500">
                ICT Manager/ Coach
              </figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={daniel}
                alt="Daniel Arowojobe image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Daniel Arowojobe
              </figcaption>
              <figcaption className="text-gray-500">
                Volunteers Coordinator
              </figcaption>
            </figure>
            <figure
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={riskat}
                alt="Riskat Ajisegiri image"
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
              <figcaption className="text-gray-500 pt-2 font-bold">
                Riskat Ajisegiri
              </figcaption>
              <figcaption className="text-gray-500">
                Volunteers Coordinator
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MeetTheTeam;
