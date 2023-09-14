import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './About.css'

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
                            <h4>Front End Developer</h4>
                            <hr />
                            <p className='about__box__text'>I am a frontend developer with a passion for building beautiful and functional web applications.</p>
                        </div>
                        <div className="single_about_box full__stack__developer">
                            <h4>Full Stack Developer</h4>
                            <hr />
                            <p className='about__box__text'>I am a <strong>frontend focused Full Stack Developer</strong> with a passion for building beautiful and functional web applications.</p>
                        </div>
                        {/* <div className="single_about_box">
                            <h4>React Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium rem est, porro a deleniti quia vero cupiditate commodi voluptas facilis.</p>
                        </div> */}
                    </div>
                    <p className='about__me__text'>Hope you're doing well 🙂<br />
                     I'm Samiul Islam, a Software Engineer with 1.9 years of experience, specializing in Frontend Development. In my role as a Frontend Developer, I've had the privilege of serving as a key contributor to <a href="https://www.mordorintelligence.com">[https://www.mordorintelligence.com]</a>, where I help create captivating web experiences using a toolkit that includes JavaScript, ES6, React, Redux, Next.js, ExpressJS, EJS and more. 
                     </p>

                     <p>
                     My work reaches and enriches the experiences of a substantial user base, with [https://www.mordorintelligence.com/] welcoming 40-45k users daily.
                     </p>
                    <p>I hold a bachelor's degree in Computer Science & Engineering from Camellia Institute Of Technology (CIT), Kolkata, and also completed a diploma in Computer Science & Technology from Dumkal Polytechnic.</p>

                     <p>
                         Passionate about coding, I'm always eager to embrace new challenges and expand my skill set. Let's connect and explore how we can collaborate to bring exciting projects to life. Discover more about me at 👇  <a href="https://www.softsamiul.tech">[https://www.softsamiul.tech]</a>.
                    </p>
                    <Zoom>
                        <a href="#contact" className='btn btn-primary about__action__btn'> Let's Talk </a>
                    </Zoom>
                </div>
            </div>
            </Zoom>
        </section>
    );
};

export default About;
