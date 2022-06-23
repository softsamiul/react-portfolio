import React from "react";
import { BsFillPatchCheckFill, BsGithub } from "react-icons/bs";
import { IoLogoNodejs, IoLogoSass, IoLogoBitbucket } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { SiBootstrap, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiNextdotjs, SiReact, SiRedux, SiWebpack } from "react-icons/si";

import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Skills & Experience</h2>

      <div className="container experience__container">
        
        <div className="experience__tech">
            <article className="tech__container">
                <div className="icon__container">
                    <AiFillHtml5  className="tech__icon html__icon"/>
                </div>
                <h4 className="tech__title ">HTML</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <IoLogoCss3  className="tech__icon css__icon"/>
                </div>
                <h4 className="tech__title ">CSS</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <IoLogoSass  className="tech__icon sass__icon"/>
                </div>
                <h4 className="tech__title ">SASS</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiBootstrap  className="tech__icon bootstrap_icon"/>
                </div>
                <h4 className="tech__title ">Bootstrap</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiTailwindcss  className="tech__icon tailwind__css"/>
                </div>
                <h4 className="tech__title ">Tailwind</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <DiJavascript1  className="tech__icon js_icon"/>
                </div>
                <h4 className="tech__title ">JavaScript</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiReact  className="tech__icon react__js"/>
                </div>
                <h4 className="tech__title ">ReactJS</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiNextdotjs  className="tech__icon next__js"/>
                </div>
                <h4 className="tech__title ">Next.js</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiRedux  className="tech__icon redux__icon"/>
                </div>
                <h4 className="tech__title ">Redux</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiWebpack  className="tech__icon webPack__icon"/>
                </div>
                <h4 className="tech__title ">WebPack</h4>
            </article>

            <article className="tech__container">
                <div className="icon__container">
                    <SiFirebase  className="tech__icon firebase__icon"/>
                </div>
                <h4 className="tech__title ">Firebase</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <BsGithub  className="tech__icon github__icon"/>
                </div>
                <h4 className="tech__title ">GitHub</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <IoLogoBitbucket  className="tech__icon bitbucket__icon"/>
                </div>
                <h4 className="tech__title ">BitBucket</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <IoLogoNodejs  className="tech__icon node__js"/>
                </div>
                <h4 className="tech__title ">NodeJS</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiExpress  className="tech__icon express__js"/>
                </div>
                <h4 className="tech__title ">ExpressJS</h4>
            </article>
            <article className="tech__container">
                <div className="icon__container">
                    <SiMongodb  className="tech__icon mongo__db"/>
                </div>
                <h4 className="tech__title ">MongoDB</h4>
            </article>
            

          {/* <div className="experience__frontend">
            <h3>Frontend Developemt</h3>

            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>HTML</h4>
                    <small className="text-right">Experienced</small>
                </div>
                
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>CSS</h4>
                    <small className="text-right">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>JavaScript</h4>
                    <small className="text-right">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>Bootstrap</h4>
                    <small className="text-right">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>Tailwind</h4>
                    <small className="text-right">Experienced</small>
                </div>
              </article>
            </div>

            <h3 className="backend__title">Backend Developemt</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>NodeJS</h4>
                    <small className="text-right">Experienced</small>
                </div>
                
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>ExpressJS</h4>
                    <small className="text-right">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div>
                    <h4>MongoDB</h4>
                    <small className="text-right">Experienced</small>
                </div>
              </article>
              
            </div>
          </div>  */}
          
        </div>

        <div className="experience__job">
          
          {/* <div className="job__period">
            <h4 className="time-stamps">2022</h4>
            <h6><small>24<sup>th</sup> April</small> - <small>Present</small></h6>
          </div>
          <div className="job__details">
            <h2 className="job__title"> <small className="itern__tag">Junior</small> Software Engineer</h2>
            <h6 className="company__name"> <a href="https://www.mordorintelligence.com/" target="_blank">Mordor Intelligence</a></h6>
            <p className="job__description">
              After successfully completing the intern I promoted to <strong>Junior Software Engineer</strong>. I'm really enjoying working here.
            </p>
          </div> */}
          <div className="job__period">
            <h4 className="time-stamps">2022</h4>
            <h6><small>24<sup>th</sup> Jan</small> - <small>Present</small></h6>
          </div>
          <div className="job__details">
            <h2 className="job__title"> <small className="itern__tag">Intern</small> Software Engineer</h2>
            <h6 className="company__name"> <a href="https://www.mordorintelligence.com/" target="_blank">Mordor Intelligence</a></h6>
            <p className="job__description">
              I joined <strong>Mordor Intelligence</strong> as an <strong>Intern Software Engineer.</strong>Worked on - <span className="worded__tech__stack">"JavaScript, React, Next.js, ExpressJS, EJS, Ant Design, Material UI, Styled Component and many more..."</span> 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
