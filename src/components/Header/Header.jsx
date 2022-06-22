import React from "react";
import CTA from "./CTA";
import HERO from "../../assets/20220622_211345.png";
import HeaderSocial from "./HeaderSocial";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="main-heading">Samiul Islam</h1>
        <h5 className=" dynamic-text">
            <Typewriter
            options={{
                strings: ["Software Engineer", 'Frontend Developer' ,'Frontend Focused Full Stack Developer'],
                autoStart: true,
                loop: true,
                delay: 100
            }}
            />
        </h5>
        

        <CTA />

        <HeaderSocial />
        <div className="hero">
          <img src={HERO} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          <span className="scroll__down_text">Scroll Down</span>{" "}
          <BsFillArrowRightCircleFill />
        </a>
      </div>
    </header>
  );
};

export default Header;
