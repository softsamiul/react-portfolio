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
                     I'm Samiul Islam <strong>a highly motivated individual</strong> with a passion for <strong>constantly developing skills</strong> and <strong>growing professionally.</strong> 
                     </p>

                     <p>
                     working as a Software Engineer - Consultant at an Indian start-up for the last 1 year. I've worked with React, Redux, Next.js, Node.js, Express.js, Ejs and many more web tools and technologies. I'm working on their main website <a href="https://www.mordorintelligence.com">[https://www.mordorintelligence.com]</a> as a primary Frontend developer and managing this website for the last 1 year, serving daily 40k - 45k users.
                     </p>

                     <p>
                     Pursuing (Final year) a bachelor's degree in Computer Science & Engineering from Camellia Institute Of Technology (CIT), Kolkata and completed a diploma in engineering in Computer Science & Technology from Dumkal Polytechnic.</p>
                    <p className='about__me__text'>
                    A fast learner, always on the lookout for opportunities.
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