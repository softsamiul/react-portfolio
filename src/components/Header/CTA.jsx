import React from 'react';
import CV from '../../assets/Samiul-Islam-software-engineer-11-06-22.pdf';
import {HiDownload} from 'react-icons/hi'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'> <HiDownload /> Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default CTA;