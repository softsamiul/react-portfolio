import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {DiTechcrunch} from 'react-icons/di';
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <a href="#" className='active'> <AiOutlineHome /></a>
            <a href="#about"> <AiOutlineUser /></a>
            <a href="#experience"> <BiBook /></a>
            <a href="#portfolio"> <DiTechcrunch /></a>
            <a href="#contact"> <BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Nav;