import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import HeaderBg from "../assets/Img/HeaderBg.jpeg";
import getInvolvedImg1 from "../assets/Img/getInvolved.jpeg";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { SiHyperskill } from "react-icons/si";
import { FaBasketballBall } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import JoinUs from "../components/JoinUs";
import Donate from "../components/Donate";
// import BecomeAVolunteer from "../components/BecomeAVolunteer";
import Map from "../components/Map";

export const Home = () => {
  // What We Do Section Data
  const whatWeDoData = [
    {
      icon: <FaBasketballBall />,
      title: "Basketball Coaching",
      description:
        "We reach out to underprivileged and street teenagers without access to sports facilities and give them the opportunity to compete globally and become evolved youngsters by teaching them basketball and coaching them to become champions at the sport.",
    },
    {
      icon: <SiHyperskill />,
      title: "Life Skills",
      description:
        "Basketball equips the teens with basic life skills like team work, resilience, and people skills. Beyond the court, our program provides access to workshops and resources that promote mental and physical well-being in children. Teens learn about healthy habits, stress management techniques.",
    },
    {
      icon: <MdOutlineFollowTheSigns />,
      title: "Leadership",
      description:
        "We aim to cultivate the African leaders of tomorrow. We identify and nurture leadership potential within our students. Teens participate in workshops that build decision-making skills, positive influence, and the courage to stand up for what is right. They learn to be role models for their peers, leading their communities towards a brighter future.",
    },
    {
      icon: <FaPeopleRoof />,
      title: "Community Thinking",
      description:
        "Basketball is not just a game — it is a unifier. Our program fosters a sense of belonging and social responsibility in teens by organizing tournaments, clean-up projects, and mentorship initiatives. Teens work together to improve their court, their neighborhood, and themselves. They learn the power of collaboration, the importance of giving back, and the joy of building a stronger community.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <header className="" data-aos="fade-up">
        <section>
          <div
            className="h-[50vh] lg:h-screen md:h-[50vh] bg-cover bg-center w-full relative rounded "
            data-aos="fade-up"
          >
            <img
              src={HeaderBg}
              alt="Basketball4everyone Header Background"
              className="w-full h-[60vh] lg:h-full  object-cover"
            />
          </div>
          <div className="absolute bg-black/50 inset-0 w-full h-full">
            <div
              className="max-w-3xl container mx-auto text-white text-center md:px-0 px-4"
              data-aos="fade-up"
            >
              <h1
                className="md:text-4xl text-2xl font-bold pt-10 md:py-5 md:pt-32 md:px-2"
                data-aos="flip-left"
              >
                Help Give Neglected Teens in Africa a Brighter Future Through
                Basketball
              </h1>
              <p
                className="text-white md:text-lg text-sm md:py-0 py-5 md:px-20"
                data-aos="flip-left"
              >
                At Basketball4Everyone Initiative, we are empowering the youths
                in the streets with safe spaces, education, and skills they need
                to thrive through the transformable power of basketball. Join
                the movement. <br />
                <TypeAnimation
                  className="font-bold bg-gradient-to-tr from-black to-yellow-500 px-2 py-2 rounded-md mt-2"
                  sequence={[
                    "We provide Education Awareness Programmes",
                    2000,
                    "We provide Health Care Programmes",
                    2000,
                    "We provide Sustainable Development Programmes",
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
            <div className="md:flex justify-center items-center gap-2 mt-4 md:mt-10 bg-transparent relative z-10">
              <div>
                <Link to="/donate">
                  <Donate />
                </Link>
              </div>
              <div>
                {/* <Link to="/volunteer">
                  <BecomeAVolunteer />
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        {/* Counter Stats */}
        <section className="bg-[#da7600] md:mt-0" data-aos="fade-p">
          <div id="stats" className="text-white py-16" data-aos="fade-p">
            <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-p">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  data-aos="fade-p"
                >
                  <dt className="text-base leading-7 text-white">
                    Empowered through basketball training.
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-teens)] before:content-[counter(num)]">
                      <span className="sr-only">100</span>+ Teens
                    </span>
                  </dd>
                </div>
                <div
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  data-aos="fade-p"
                >
                  <dt className="text-base leading-7 text-white">
                    Of continuous grassroot impact
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-years)] before:content-[counter(num)]">
                      <span className="sr-only">2</span>+ Years
                    </span>
                  </dd>
                </div>
                <div
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  data-aos="fade-p"
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

        {/* Raising Champions Section */}
        <section
          className="bg-gray-50 py-20 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="container mx-auto grid md:grid-cols-2 gap-10 px-4 md:px-0">
            <div
              className="p-6 shadow-2xl rounded-lg bg-white text-black hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="slide-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1 className="text-3xl md:text-4xl font-bold pb-4">
                We&apos;re Raising Future Champions From The Streets
              </h1>
              <p className="text-base leading-relaxed">
                In Africa, over 16 million children live on the streets, in
                uninhabitable slums, and neglected areas, lacking access to
                education or basic facilities. Aged 10–19, these children often
                end up on the streets due to poverty, stigma, abuse,
                overcrowding, or neglect. Exposed to dangerous vices, substance
                abuse, and behavioral dysfunction, they risk not only their own
                futures but also society’s. Many turn to crime, waste away, and
                never realize their potential.
              </p>
            </div>
            <div
              className="w-full h-full overflow-hidden rounded-xl"
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                src={getInvolvedImg1}
                alt="Volunteer Image"
                className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section data-aos="fade-up" className="py-10">
          <div className="flex justify-center gap-1 items-center text-sm text-[#DA7600] pt-10">
            <MdOutlineRoundaboutRight className="text-[#da7600]" />
            About
          </div>
          <h1 className="text-2xl font-bold mt-2 text-center pb-10">
            What we do
          </h1>
          <div
            className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto md:px-0 px-4"
            data-aos="fade-up"
          >
            {whatWeDoData.map((item, idx) => (
              <div
                key={idx}
                className="text-center shadow-md  hover:shadow-xl rounded-md p-4 bg-white hover:scale-105 transition-transform duration-300 ease-in-out"
                data-aos="fade-up"
              >
                <div className="text-4xl my-4 flex justify-center items-center font-bold bg-gradient-to-tr from-black to-[#da7600] bg-clip-text pb-4">
                  {item.icon}
                </div>
                <h1
                  className="text-2xl font-bold pb-4 bg-gradient-to-tr from-black to-yellow-500 bg-clip-text text-transparent"
                  data-aos="flip-left"
                >
                  {item.title}
                </h1>
                <p className="text-gray-500 pt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-gray-50 py-10">
          <JoinUs />
        </section>

        {/* Map Section */}

        <Map />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};
