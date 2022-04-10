import React from 'react';

import ME from '../../assets/me-about.jpg';
import './About.css'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me__left">
                    <img src={ME} alt="" className='about_me_img'/>
                </div>
                <div className="about__me_right">
                    <div className="about__box__container">
                        <div className="single_about_box frontend__develoer">
                            <h4>Front End Developer</h4>
                            <hr />
                            <p className='about__box__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium rem est, porro a deleniti quia vero cupiditate commodi voluptas facilis.</p>
                        </div>
                        <div className="single_about_box full__stack__developer">
                            <h4>Full Stack Developer</h4>
                            <hr />
                            <p className='about__box__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium rem est, porro a deleniti quia vero cupiditate commodi voluptas facilis.</p>
                        </div>
                        {/* <div className="single_about_box">
                            <h4>React Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium rem est, porro a deleniti quia vero cupiditate commodi voluptas facilis.</p>
                        </div> */}
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium, maiores quam libero eius maxime recusandae dicta non accusamus dolor at facere aliquam.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ab dignissimos quisquam reprehenderit hic. Vero at quidem quia iure ipsum!</p>

                    <a href="#contact" className='btn btn-primary about__action__btn'> Let's Talk </a>
                </div>
            </div>
        </section>
    );
};

export default About;