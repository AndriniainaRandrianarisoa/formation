import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  
  return (
    <>
      <div className="nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </>
  );
};

export default Navbar;
