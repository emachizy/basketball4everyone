import { useState } from "react";
import Img from "../assets/Img/getInvolved.jpeg";
import Map from "../components/Map";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store form data locally
    setIsSubmitted(true); // Show success message
    console.log("Volunteer Form Data:", formData); // Log to console for debugging
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      skills: "",
      availability: "",
      message: "",
    });
  };

  return (
    <>
      <header>
        <div
          className="bg-gradient-to-tr from-gray-500 to-slate-950 h-72 bg-cover bg-center w-full relative"
          data-aos="fade-up"
        >
          <img
            src={Img}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <h1 className="text-4xl capitalize text-white font-bold pt-56 text-center">
            Volunteer
          </h1>
        </div>
      </header>

      {/* Get in touch */}
      <section className="md:w-4/5 md:mx-auto rounded-2xl mx-4 mt-10">
        <div className=" grid md:grid-cols-3 gap-5 ">
          <div className="bg-gradient-to-tr from-black to-yellow-500 px-10 py-4 rounded">
            <div className="mt-2 mb-5">
              <FaLocationDot className="text-[#DA7600] text-4xl" />
            </div>
            <div className="text-white font-bold text-sm">
              <p>Address</p>
              <h3>5 Bucknor savage boulevard</h3>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-black to-yellow-500 px-10 py-4 rounded">
            <div className="mt-2 mb-5">
              <MdEmail className="text-[#DA7600] text-4xl" />
            </div>
            <a
              href="mailto:basketball4everyone@gmail.com"
              className="text-white font-bold text-sm"
            >
              Send Email <br /> basketball4everyone@gmail.com
            </a>
          </div>
          <div className="bg-gradient-to-tr from-black to-yellow-500 px-10 py-4 rounded">
            <div className="mt-2 mb-5">
              <FaPhoneAlt className="text-[#DA7600] text-4xl" />
            </div>
            <a
              href="tel:+234-8127709163"
              className="text-white font-bold text-sm"
            >
              phone <br />
              +234-8127709163
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <div>
        <Map />
      </div>

      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-[#DA7600] mb-6 text-center">
          Volunteer With Us
        </h2>

        {isSubmitted && submittedData ? (
          <div className="text-center">
            <p className="text-[#DA7600] mb-4">
              Thank you, {submittedData.name}!
            </p>
            <pre className="text-gray-700">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-[#DA7600] text-white px-4 py-2 rounded hover:bg-[#b35f00]"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA7600] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA7600] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA7600] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA7600] focus:border-transparent"
                placeholder="e.g., Coaching, Organizing"
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA7600] focus:border-transparent"
                placeholder="e.g., Weekends, Evenings"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA7600] focus:border-transparent resize-y"
                rows="4"
                placeholder="Why do you want to volunteer?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#DA7600] text-white py-2 rounded-md hover:bg-[#b35f00] transition-colors font-semibold"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default VolunteerForm;
