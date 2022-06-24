import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaTwitterSquare} from 'react-icons/fa';
import './Footer.css';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

const Footer = () => {
    return (
        <section id="footer">
            <Zoom>
                <div className="footer__container">
                    <a href="#" className='footer__logo'>Samiul</a>
                </div>
            </Zoom>

            <LightSpeed>
                <ul className="permalinks">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Skills & Experience</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </LightSpeed>

            <Zoom>
                <div className='footer__socials'>
                    <a href="https://www.linkedin.com/in/softsamiul/" target="_blank"> <BsLinkedin className='foot_icon'/></a>
                    <a href="https://github.com/softsamiul" target="_blank"><FaGithub className='foot_icon'/></a>
                    <a href="https://www.twitter.com/softsamiul/" target="_blank"><FaTwitterSquare className='foot_icon' /></a>
                </div>
            </Zoom>

            <div className="footer__copyright">
                <p>All Rights reserved to Samiul Islam</p>
            </div>
           
        </section>
    );
};

export default Footer;