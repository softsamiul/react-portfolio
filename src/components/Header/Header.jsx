import React from 'react';
import CTA from './CTA';
import HERO from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Samiul Islam</h1>
                <h5 className="text-light">Software Engineer</h5>

                <CTA />

                <HeaderSocial />
                <div className="hero">
                    <img src={HERO} alt="" />
                </div>

                <a href="#contact" className='scroll__down'> <span className="scroll__down_text">Scroll Down</span> <BsFillArrowRightCircleFill /></a>
            </div>
        </header>
    );
};

export default Header;