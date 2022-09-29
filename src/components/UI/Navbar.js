import React from "react";
import logo from '../../assets/react_pdf_logo.png'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="general_navbar">
      <img src={logo} alt="react_pdf_logo" />
    </div>  
  );
};

export default Navbar;
