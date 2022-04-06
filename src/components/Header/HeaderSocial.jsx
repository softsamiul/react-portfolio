import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/softsamiul/" target="_blank"> <BsLinkedin /></a>
            <a href="https://github.com/softsamiul" target="_blank"><FaGithub /></a>
            <a href="https://www.twitter.com/softsamiul/" target="_blank"><FaTwitterSquare /></a>
        </div>
    );
};

export default HeaderSocial;