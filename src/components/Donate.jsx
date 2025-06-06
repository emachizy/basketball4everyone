// import React from 'react'

import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="text-center">
      <Link
        to="/donate"
        className=" inline-block bg-[#da7600] hover:bg-white hover:text-[#da7600] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md md:text-xs mb-2"
      >
        Donate Today
      </Link>
    </div>
  );
};

export default Donate;
