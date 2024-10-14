// import React from "react";

import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutUsHeader from "../assets/Img/AboutUsHeaderBg.jpeg";
import { Link } from "react-router-dom";

const About = () => {
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
            src={AboutUsHeader}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <h1 className="text-4xl capitalize text-white font-bold pt-56 text-center">
            about us
          </h1>
        </div>
      </header>
      <body>
        <section
          className="container mx-auto border border-[text-#DA7600] mt-10 pt-5 shadow-lg"
          data-aos="fade-up"
        >
          <h1
            className="md:text-4xl text-black font-bold text-center text-2xl"
            data-aos="fade-up"
          >
            We Are Basketball4Everyone
          </h1>
          <p
            className="text-gray-500 text-center px-10 py-6"
            data-aos="fade-up"
          >
            Basketball4Everyone is an initiative created by a dedicated team of
            coaches, mentors, and community leaders who are passionate about
            making a difference in the lives of those who are at a disadvantage.
            We believe in the power of basketball to transform lives and create
            opportunities for vulnerable teenagers in neglected and unreachable
            areas across Africa. Our mission is to empower these young
            individuals by promoting healthy behaviors and forging the path to a
            brighter future for them through the sport we love. We use
            basketball as a tool to reach adolescents in underserved areas,
            offering them not just a game but a path to better health,
            education, life choices, and personal growth. Our programs are
            designed to foster physical fitness, mental well-being, and social
            development, giving these underprivileged teenagers a chance to
            succeed and thrive.
          </p>
        </section>
        <section
          className="container mx-auto border border-[text-#DA7600] mt-10 pt-5 shadow-lg"
          data-aos="fade-up"
        >
          <h1
            className="text-4xl text-black font-bold text-center"
            data-aos="fade-up"
          >
            Our Vision
          </h1>
          <p
            className="text-gray-500 text-center px-10 py-6"
            data-aos="fade-up"
          >
            Basketball4Everyone Initiative wasn’t born on a polished court, it
            was born on a dusty street, under a relentless sun. We saw the raw
            talent in street children, the burning desire – but also the
            challenges and vices faced by teenagers in forgotten corners of
            Africa. We saw basketball, not just as a sport, but as a powerful
            tool for change.
          </p>
        </section>
        <section
          className="container mx-auto border border-[text-#DA7600] mt-10 pt-5 shadow-lg"
          data-aos="fade-up"
        >
          <h1
            className="text-4xl text-black font-bold text-center"
            data-aos="fade-up"
          >
            Our Story
          </h1>
          <p
            className="text-gray-500 text-center px-10 py-6"
            data-aos="fade-up"
          >
            Our story began in May 2022, in Ita-Elewa Ikorodu, a suburb area of
            Lagos,Nigeria that is notorious for its rise in social vices, and
            substance abuse amongst youths. One day, I (Onyeka Obiozo) was
            passing through the youth stadium and saw a lot of kids randomly
            playing ball on the basketball court. I said to myself “If only they
            had someone to teach them the game.” I was inspired by the keen
            interest of these teenagers and it spurred me into action. I spoke
            with the manager of the Youth Centre in Ikorodu few days after,
            asking her for the opportunity to help these children and she
            approved. I bought a basketball and started coaching them. More kids
            started coming along from the community and became more interested
            in the game of basketball. We managed to secure a community
            partnership with the then manager the Youth Centre. To encourage
            more disadvantaged and vulnerable teenagers to participate, we also
            partnered with certain individuals who offered their donations to
            get sport gear and refreshments as incentives for more kids. Fast
            forward to today, Basketball4Everyone is extending her reach to the
            cities of PortHarcourt and Yenegoa respectively. With the help and
            impact of more individuals like you, we can penetrate every
            forgotten nook and cranny of African cities and transform the lives
            of more adolescents. Every donation, every volunteer hour, makes a
            difference in helping a vulnerable teen blossom into a confident and
            responsible leader. That is the impact you can be a part of.
          </p>
        </section>
        <section
          className="flex justify-around items-center container mx-auto"
          data-aos="fade-up"
        >
          <Link
            to="/donate"
            className="bg-[#DA7600] text-white px-10 py-2 rounded-md text-center"
            data-aos="fade-up"
          >
            Donate Today
          </Link>
          <Link
            to="/contactUs"
            className="bg-[#DA7600] text-white px-10 py-2 rounded-md text-center"
            data-aos="fade-up"
          >
            Volunteer With Us
          </Link>
        </section>

        <Footer data-aos="fade-up" />
      </body>
    </>
  );
};

export default About;
