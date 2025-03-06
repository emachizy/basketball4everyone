import { useState, useEffect, useRef } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import emmanuelImg from "../assets/Img/emmanuel.jpeg";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "John Doe",
    image: emmanuelImg,
    job: "IT Directory",

    rating: 5,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "Jane Doe",
    image: emmanuelImg,
    job: "IT Directory",

    rating: 4,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "Alice Doe",
    image: emmanuelImg,
    job: "IT Directory",

    rating: 3,
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "Bob Doe",
    image: emmanuelImg,
    job: "IT Directory",

    rating: 2,
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "Charlie Doe",
    image: emmanuelImg,
    job: "IT Directory",

    rating: 1,
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "David Doe",
    image: emmanuelImg,
    job: "IT Directory",

    rating: 5,
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "Emily Doe",
    image: emmanuelImg,
    job: "IT Directory",

    rating: 4,
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi voluptas, unde repudiandae qui atque impedit reprehenderit accusamus dolorum nam. Quae, error. Repellat, dignissimos sit",
    name: "Frank Doe",
    image: emmanuelImg,

    job: "IT Directory",
    rating: 3,
  },
];

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Grab and slide functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const visibleTestimonials = testimonials
    .slice(startIndex, startIndex + 4)
    .concat(
      testimonials.slice(0, Math.max(0, startIndex + 4 - testimonials.length))
    );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden my-10 bg-slate-100"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-center py-10">
        <div className="flex justify-center gap-1 items-center text-sm text-[#DA7600]">
          <BsFillSuitHeartFill />
          Testimonials
        </div>
        <h2 className="text-2xl font-bold mt-2 flex flex-col">
          <span className="font-bold">What They Are Talking </span>
          <span className="font-bold">About Basketball4everyone</span>
        </h2>
      </div>
      <div className="flex gap-4 transition-transform duration-500 ease-in-out mx-4 py-10 overflow-x-auto snap-x snap-mandatory">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm cursor-grab active:cursor-grabbing snap-start"
          >
            <div className="text-yellow-500 flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div className="flex gap-4 mt-8 w-full">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-14 rounded-full mb-4 align-middle"
              />

              {/* Name and job */}
              <div className="flex justify-between items-center w-full md:mt-1">
                <div>
                  <h3 className="font-bold text-base">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.job}</p>
                </div>
                <div className="text-yellow-500 text-lg">
                  <BiSolidQuoteAltRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
