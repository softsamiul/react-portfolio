import React from "react";
import CTA from "./CTA";
import HERO from "../../assets/20220622_211345.png";
import HeaderSocial from "./HeaderSocial";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Slide top>
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
          {/* Call to action btn */}
          <CTA />
        </Slide>

        
        <HeaderSocial />
        

        <Fade>
          <div className="hero">
            <img src={HERO} alt="" />
          </div>
        </Fade>
        
        <a href="#contact" className="scroll__down">
          {" "}
          <Bounce right>
            <span className="scroll__down_text">Scroll Down</span>{" "}
            <BsFillArrowRightCircleFill />
          </Bounce>
        </a>
        
      </div>
    </header>
  );
};

export default Header;
