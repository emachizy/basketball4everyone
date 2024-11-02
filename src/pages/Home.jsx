// import React from "react";
import { Link } from "react-router-dom";
import Donate from "../components/Donate";
import Img from "../assets/Img/Img.png";
// import Logo from "../assets/Logo.png";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

import { useEffect } from "react";

import HeaderBg from "../assets/Img/HeaderBg.jpeg";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <>
      <header className="" data-aos="fade-up">
        {/* Hero section */}
        <section>
          <div
            className="bg-gradient-to-tr from-gray-500 to-gray-950 h-screen bg-cover bg-center w-full relative"
            data-aos="fade-up"
          >
            <img
              src={HeaderBg}
              alt=""
              className="w-full h-full object-cover absolute mix-blend-overlay"
            />
            <div
              className="container mx-auto text-white text-center pt-8 md:px-0 px-4"
              data-aos="fade-up"
            >
              <h1
                className="md:text-6xl text-2xl font-bold pt-24 md:py-5 md:pt-32 md:px-2"
                data-aos="flip-left"
              >
                Help Give Neglected Teens in Africa a Brighter Future Through
                Basketball
              </h1>
              <p
                className="text-white md:text-lg text-xl md:py-0 py-10 md:px-20"
                data-aos="flip-left"
              >
                At Basketball4Everyone Initiative, we are empowering the youths
                in the streets with safe spaces, education, and skills they need
                to thrive through the transformable power of basketball. Join
                the movement. <br />
                <TypeAnimation
                  className="font-bold bg-[#DA7600] px-2 py-1 rounded-md mt-2"
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "We provide Education Awareness Programmes",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We provide Health Care Programmes",
                    2000,
                    "We provide Sustainable Development Programmes",
                    2000,
                    2000,
                    " ...We rise by lifting others",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>
            </div>
            <Link
              to="/donate"
              className="mx-0 flex justify-center items-center z-10 py-5 md:py-10 absolute text-center left-[35%] md:left-[45%]"
              data-aos="fade-up"
            >
              <Donate />
            </Link>
          </div>
        </section>
      </header>
      <main>
        {/* Counter Stats */}
        <section className="bg-[#DA7600] md:mt-0" data-aos="fade-up">
          <div id="stats" className="text-white py-16 " data-aos="fade-up">
            <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  data-aos="fade-up"
                >
                  <dt className="text-base leading-7 text-white">
                    Empowered through basketball training.
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-teens)] before:content-[counter(num)]">
                      {" "}
                      <span className="sr-only">100</span>+ Teens
                    </span>
                  </dd>
                </div>
                <div
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  data-aos="fade-up"
                >
                  <dt className="text-base leading-7 text-white">
                    Of continuous grassroot impact
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-years)] before:content-[counter(num)]">
                      {" "}
                      <span className="sr-only">2</span>+ Years{" "}
                    </span>
                  </dd>
                </div>
                <div
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  data-aos="fade-up"
                >
                  <dt className="text-base leading-7 text-white">
                    Young drug addict rehabilitated
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-former)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
                      <span className="sr-only">20</span>+ Former
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="bg-black" data-aos="fade-up">
          <div
            className="container mx-auto grid md:grid-cols-2 gap-5 py-10 md:px-0 px-4"
            data-aos="fade-up"
          >
            <div className="text-white" data-aos="fade-up">
              <h1 className="font-bold text-4xl pb-4">
                We&apos;re Raising Future Champions From The Streets
              </h1>
              <p>
                In Africa, more than 16 million children live on the streets of
                cities, uninhabitable slums, and neglected areas without access
                to education or average facilities.These children, aged between
                10 – 19 end up on the streets because of family poverty, stigma,
                abuse, overcrowding, and neglect. They are exposed to dangerous
                vices, substance abuse, and initiation to behavioral dysfunction
                — posing a risk to not just their future, but the society at
                large. They end up committing crimes, getting wasted, and never
                actualizing their potential.
              </p>
            </div>
            <div data-aos="fade-up">
              <img src={Img} alt="" />
            </div>
          </div>
        </section>
        {/* What we do */}
        <section data-aos="fade-up">
          <h1 className="text-3xl font-bold text-center py-10">What we do</h1>

          <div
            className="grid md:grid-cols-2 gap-10 container mx-auto md:px-0 px-4"
            data-aos="fade-up"
          >
            <div
              className="text-center shadow-md rounded-md p-2"
              data-aos="fade-up"
            >
              <h1 className="text-2xl font-bold pb-4" data-aos="flip-left">
                Basketball Coaching
              </h1>
              <p>
                We reach out to underprivileged and street teenagers without
                access to sports facilities and give them the opportunity to
                compete globally and become evolved youngsters by teaching them
                basketball and coaching them to become champions at the sport.
              </p>
            </div>
            <div
              className="text-center shadow-md rounded-md p-2"
              data-aos="fade-up"
            >
              <h1 className="text-2xl font-bold pb-4" data-aos="flip-left">
                Life Skills
              </h1>
              <p>
                Basketball equips the teens with basic life skills like team
                work, resilience, and people skills. Beyond the court, our
                program provides access to workshops and resources that promote
                mental and physical well-being in children. Teens learn about
                healthy habits, stress management techniques.
              </p>
            </div>
            <div
              className="text-center shadow-md rounded-md p-2"
              data-aos="fade-up"
            >
              <h1 className="text-2xl font-bold pb-4" data-aos="flip-left">
                Leadership
              </h1>
              <p>
                We aim to cultivate the African leaders of tomorrow. We identify
                and nurture leadership potential within our students. Teens
                participate in workshops that build decision-making skills,
                positive influence, and the courage to stand up for what is
                right. They learn to be role models for their peers, leading
                their communities towards a brighter future.
              </p>
            </div>
            <div
              className="text-center shadow-md rounded-md p-2"
              data-aos="fade-up"
            >
              <h1 className="text-2xl font-bold pb-4" data-aos="flip-left">
                Community Thinking
              </h1>
              <p>
                Basketball is not just a game — it is a unifier. Our program
                fosters a sense of belonging and social responsibility in teens
                by organizing tournaments, clean-up projects, and mentorship
                initiatives. Teens work together to improve their court, their
                neighborhood, and themselves. They learn the power of
                collaboration, the importance of giving back, and the joy of
                building a stronger community.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};
