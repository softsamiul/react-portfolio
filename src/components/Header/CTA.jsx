import React from 'react';
import CV from '../../assets/Samiul-Islam-resume-software-engineer-07-03-22.pdf';
import {HiDownload} from 'react-icons/hi'
import {BsChatLeftTextFill} from 'react-icons/bs'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'> <HiDownload /> Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default CTA;