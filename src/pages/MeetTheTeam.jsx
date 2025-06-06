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
import LazyImage from "../components/LazyLoading";

const teamMembers = [
  {
    name: "Epere Paschal",
    role: "Executive Director",
    image: pascal,
    alt: "Pascal Epere image",
  },
  {
    name: "Samuel Ajayi",
    role: "Programs Manager/ Coach",
    image: ajayi,
    alt: "Ajayi Samuel image",
  },
  {
    name: "Yetunde Martins",
    role: "HR & Admin Manager",
    image: yetunde,
    alt: "Yetunde image",
  },
  {
    name: "Emmanuel Samson",
    role: "Monitoring and Evaluation Coordinator/ Coach",
    image: samson,
    alt: "Emmanuel Samson image",
  },
  {
    name: "Ayomide Eleboda",
    role: "Outreach Manager",
    image: ayomide,
    alt: "Ayomide Eleboda image",
  },
  {
    name: "Richard Obiozo",
    role: "Finance Officer",
    image: richard,
    alt: "Richard Obiozo image",
  },
  {
    name: "Emmanuel Nwankwo",
    role: "ICT Manager/ Coach",
    image: emmanuel,
    alt: "Emmanuel Nwankwo image",
  },
  {
    name: "Daniel Arowojobe",
    role: "Volunteers Coordinator",
    image: daniel,
    alt: "Daniel Arowojobe image",
  },
  {
    name: "Riskat Ajisegiri",
    role: "Volunteers Coordinator",
    image: riskat,
    alt: "Riskat Ajisegiri image",
  },
];

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
          className="bg-gradient-to-tr from-gray-500 to-slate-950 h-[40vh] md:h-72 bg-cover bg-center w-full relative"
          data-aos="fade-up"
        >
          <LazyImage
            src={meetTheteamBg}
            alt=""
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <h1 className="text-4xl capitalize text-white font-bold text-center">
            Meet the team
          </h1>
        </div>
      </header>
      <main className="w-4/5 mx-auto">
        <section
          className="md:flex justify-between items-center container mx-auto w-full gap-10 my-20 rounded-lg shadow-md overflow-hidden p-4"
          data-aos="fade-up"
        >
          <figure>
            <LazyImage src={obiozor} alt="Obiozor" className="rounded" />
            <figcaption className="text-gray-500 pt-2 font-bold">
              Onyeka Obiozo
            </figcaption>
            <figcaption className="text-gray-500">Founder</figcaption>
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
        <section className="my-20 p-4" data-aos="fade-up">
          <h1 className="text-4xl text-center font-bold py-10 capitalize">
            meet the team
          </h1>
          <div className="grid md:grid-cols-3 container mx-auto w-full gap-10">
            {teamMembers.map((member, idx) => (
              <figure
                key={member.name + idx}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
                data-aos="fade-up"
              >
                <LazyImage
                  src={member.image}
                  alt={member.alt}
                  className="object-cover select-none w-44 h-44 bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] mx-auto"
                />
                <figcaption className="text-gray-500 pt-2 font-bold">
                  {member.name}
                </figcaption>
                <figcaption className="text-gray-500">{member.role}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MeetTheTeam;
