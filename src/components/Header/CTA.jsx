import React from 'react';
import { HiDownload } from 'react-icons/hi';
import CV from '../../assets/Samiul-Islam-Frontend-Engineer-React-15-03-24.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'> <HiDownload /> Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default CTA;