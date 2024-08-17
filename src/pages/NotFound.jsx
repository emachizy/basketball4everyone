// import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Sorry! We are currently working on this page.</h1>
      <p>
        Go back <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
