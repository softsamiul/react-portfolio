import React from "react";
import Zoom from "react-reveal/Zoom";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <Zoom>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="about__container">
          <div className="about__me_right">
            <div className="about__box__container">
              <div className="single_about_box frontend__develoer">
                <h4>
                  Frontend Engineer | React & JavaScript | Scalable Web
                  Solutions | Exploring AI-Driven Development
                </h4>
                <hr />
                <p className="about__box__text">
                  Hi, I’m Samiul Islam — a Software Engineer with ~3+ years of
                  experience, specializing in building high-performance,
                  scalable, and user-centric web applications.
                </p>
                <p className="about__box__text">
                  Currently, I work as a Software Engineer at Mordor
                  Intelligence, where I contribute to delivering data-driven web
                  experiences that serve 60K+ daily users. I focus on crafting
                  responsive, optimized, and visually engaging interfaces that
                  directly impact user engagement and business growth.
                </p>

                <p className="about__box__text">
                  I hold a bachelor's degree in Computer Science & Engineering
                  from Camellia Institute Of Technology (CIT), Kolkata, and also
                  completed a diploma in Computer Science & Technology from
                  Dumkal Polytechnic.
                </p>

                <p className="about__box__text">
                  Passionate about coding, I'm always eager to embrace new
                  challenges and expand my skill set. Let's connect and explore
                  how we can collaborate to bring exciting projects to life.
                  Discover more about me at 👇{" "}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/softsamiul"
                  >
                    [https://www.linkedin.com/in/softsamiul]
                  </a>
                  .
                </p>
                <Zoom>
                  <a
                    href="#contact"
                    className="btn btn-primary about__action__btn"
                  >
                    {" "}
                    Let's Talk{" "}
                  </a>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default About;
