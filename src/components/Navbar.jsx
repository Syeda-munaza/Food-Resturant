import React from "react";
import logo from "../assets/Images/logo.png";
const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="# " className="logo">
          <img src={logo} alt="" />
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Home</a>
          <a href="#home">Home</a>
        </nav>
        <div className="icons">
  <i className="fas fa-search"></i>
  <i className="fas fa-shopping-cart"></i>
</div>

      </header>
    </>
  );
};

export default Navbar;
