import React from "react";
import { Link } from "react-router-dom";

const Front = () => {
  return (
    <div>
      <h1>Welcome to Swiggy</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">SignUp</Link>
    </div>
  );
};

export default Front;
