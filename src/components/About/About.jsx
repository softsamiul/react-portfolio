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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium, maiores quam libero eius maxime recusandae dicta non accusamus dolor at facere aliquam, voluptas magni deserunt quaerat nam quasi amet obcaecati id? Magnam, non enim laudantium, omnis labore tenetur minima doloribus, nisi necessitatibus voluptate dolore?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ab dignissimos quisquam reprehenderit hic. Vero at quidem quia iure ipsum!</p>

                    <a href="#contact" className='btn btn-primary'> Let's Talk </a>
                </div>
            </div>
        </section>
    );
};

export default About;