import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaTwitterSquare} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer__container">
                <a href="#" className='footer__logo'>Samiul</a>
            </div>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Skills & Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/softsamiul/" target="_blank"> <BsLinkedin className='foot_icon'/></a>
                <a href="https://github.com/softsamiul" target="_blank"><FaGithub className='foot_icon'/></a>
                <a href="https://www.twitter.com/softsamiul/" target="_blank"><FaTwitterSquare className='foot_icon' /></a>
            </div>

            <div className="footer__copyright">
                <p>All Rights reserved to Samiul Islam</p>
            </div>
        </section>
    );
};

export default Footer;