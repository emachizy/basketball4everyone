import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log("Form data submitted:", formData);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1000);
    }
    setTimeout(() => {
      setShow(true);
    }, 2000);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(data.phoneNumber)) {
      errors.phoneNumber = "Phone number must contain only digits";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full md:w-1/2 mx-auto border-b border-gray-900/10 pb-12 shadow-md p-4 rounded bg-gray-100"
      >
        <h1 className="text-4xl font-bold pb-4">Send us a message</h1>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-[#da7600] focus:px-2"
            aria-label="Full Name"
          />
          {errors.fullName && (
            <p className="error text-red-600">{errors.fullName}</p>
          )}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-[#da7600] focus:px-2"
            aria-label="Email"
          />
          {errors.email && <p className="error text-red-600">{errors.email}</p>}
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-[#da7600] focus:px-2"
            aria-label="Phone Number"
          />
          {errors.phoneNumber && (
            <p className="error text-red-600">{errors.phoneNumber}</p>
          )}
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-[#da7600] focus:px-2"
            aria-label="Message"
          ></textarea>
          {errors.message && (
            <p className="error text-red-600">{errors.message}</p>
          )}
          <button
            type="submit"
            className="bg-[#DA7600] text-white py-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        {show && (
          <p className="text-sm text-green-400">
            Your message has been sent successfully!
          </p>
        )}
      </form>
    </>
  );
};

export default ContactForm;
