import React from 'react';

import ME from '../../assets/me-about2.png';
import './About.css'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="about__container">
                {/* <div className="about__me__left">
                    <img src={ME} alt="" className='about_me_img'/>
                </div> */}
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
                    <p className='about__me__text'>I'm Samiul Islam is <strong>a highly motivated individual</strong> with a passion for <strong>constantly developing skills</strong> and <strong>growing professionally.</strong> Prusuing bachelor degree in Computer Science & Enggineering from Camellia Institute Of Technology (CIT), Kolkata and also completed diploma engineering in Computer Science & Technology from Dumkal Polytechnic. </p>
                    <p className='about__me__text'>
                    A fast learner, always on the lookout for opportunities.
                    </p>

                    <a href="#contact" className='btn btn-primary about__action__btn'> Let's Talk </a>
                </div>
            </div>
        </section>
    );
};

export default About;