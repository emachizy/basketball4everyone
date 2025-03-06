import { Link } from "react-router-dom";

const BecomeAVolunteer = () => {
  return (
    <div className="text-center">
      <Link
        to="/volunteer"
        className=" inline-block bg-[#da7600] hover:bg-white hover:text-[#da7600] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md md:text-xs mb-2"
      >
        Become a Volunteer
      </Link>
    </div>
  );
};

export default BecomeAVolunteer;
