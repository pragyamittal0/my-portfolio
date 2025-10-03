import React from "react";
import "./SocialNav.css";
import { FaLinkedin, FaGithub, FaFilePdf, FaHeart } from "react-icons/fa";

const SocialNavbar = () => {
  return (
    <div className="full-navbar">
    <div className="social-navbar">
      <a href="https://www.linkedin.com/in/pragya-mittal-7a858b1b1/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://github.com/pragyamittal0" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://drive.google.com/file/d/1MJ574faiEu4FHdbBglrKWNmgkKtWUmnI/view?usp=sharing" download target="_blank" rel="noopener noreferrer">
        <FaFilePdf className="social-icon" />
      </a>
      </div>

      <div className="footer-message">
        <FaHeart className="heart-icon" />  Pragya
      </div>
    </div>
  );
};

export default SocialNavbar;
