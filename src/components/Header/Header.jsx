import React from "react";
import CTA from "./CTA";
// import HERO from "../../assets/20220622_211345.png";
import HERO from "../../assets/samiul-islam-square.png";
import HeaderSocial from "./HeaderSocial";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
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
                strings: [
                  "Software Engineer",
                  "Full Stack Engineer",
                  "Frontend Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h5>
          {/* Call to action btn */}
          <CTA />
        </Slide>

        <HeaderSocial />
        <section className="about__container">
          <Fade>
            <div className="hero">
              <img src={HERO} alt="" />
            </div>
            <div className="about-me"></div>
          </Fade>
        </section>
        {/* <section className="about__container py-12 px-4 md:px-10">
          <Fade>
            <div className="hero-wrap">
              <div className="hero hero-left flex justify-center">
                <img
                  src={HERO}
                  alt="Samiul Islam"
                  className="w-64 md:w-80 rounded-2xl shadow-lg object-cover"
                />
              </div>
              <div className="about-me hero-right text-gray-800 text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  About Me
                </h2>

                <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-4 text-left">
                  Frontend Engineer | React • Next.js • Scalable Web Apps
                </h3>

                <p className="mb-3 leading-relaxed text-left">
                  Hi, I’m Samiul Islam — a Software Engineer with ~2+ years of
                  experience, specializing in building high-performance,
                  scalable, and user-centric web applications.
                </p>

                <p className="mb-4 leading-relaxed text-left">
                  Currently, I work as a Frontend Engineer at Mordor
                  Intelligence, where I contribute to delivering data-driven web
                  experiences that serve 40K+ daily users. I focus on crafting
                  responsive, optimized, and visually engaging interfaces that
                  directly impact user engagement and business growth.
                </p>
                <h4 className="font-semibold text-lg mb-2 text-left">
                  💻 What I Do
                </h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm md:text-base">
                  <li>
                    Build modern apps using React, Next.js & JavaScript (ES6+)
                  </li>
                  <li>Scalable frontend architecture with Redux</li>
                  <li>Full-stack work with Node.js, Express.js, EJS</li>
                  <li>Performance, SEO & accessibility optimization</li>
                </ul>
                <h4 className="font-semibold text-lg mb-2 text-left">
                  🎯 My Approach
                </h4>
                <p className="mb-4 leading-relaxed text-left">
                  I focus on clean code, performance, and user experience to
                  build impactful products. I enjoy solving real-world problems
                  and continuously learning modern technologies.
                </p>
                <h4 className="font-semibold text-lg mb-2 text-left">
                  🌱 Beyond Code
                </h4>
                <p className="mb-6 leading-relaxed">
                  Exploring content creation & personal branding while building
                  multiple income streams.
                </p>
                <a
                  href="https://www.softsamiul.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-black text-white px-6 py-2 rounded-xl shadow hover:bg-gray-800 transition"
                >
                  Visit Personal Website →
                </a>
              </div>
            </div>
          </Fade>
        </section> */}

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
