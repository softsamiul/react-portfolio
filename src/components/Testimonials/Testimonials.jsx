import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Rotate from 'react-reveal/Rotate';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css"
import { Pagination } from "swiper";
import Zoom from 'react-reveal/Zoom';
import ClientIMG from '../../assets/avatar2.png';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <Zoom>
                <h5>People's Thought About Me</h5>
                <h2>Testimonials</h2>
            </Zoom>
            <Rotate bottom right>
            <Swiper className="container__testimonials mySwiper"
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={ClientIMG} alt="" />
                    </div>
                    <a href="https://www.linkedin.com/in/digvijay-singh-thakur-b78967177" style={{color:"#fff"}} target="_blank"><h5 className='client__name'>Digvijay Singh</h5></a>
                    <h6>Senior Software Engineer at <a href="https://www.mordorintelligence.com" style={{marginBottom:"15px"}} >Mordor Intelligence</a></h6>
                    <small className="client__review" >
                        <blockquote>
                        Samiul is an outstanding software engineer who consistently delivers high-quality work. Their technical skills and attention to detail are truly impressive, and they always go above and beyond to ensure that projects are completed on time and to the highest standards. It's been a pleasure working with them, and I have no doubt that they will continue to excel in their role.
                        </blockquote>
                        
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <a href="https://www.linkedin.com/in/shreedutt-dixit-613383191" target="_blank">
                            <img src={ClientIMG} alt="" />
                        </a>
                       
                    </div>
                    <a href="https://www.linkedin.com/in/shreedutt-dixit-613383191" style={{color:"#fff"}} target="_blank"><h5 className='client__name'>Shreedutt Dixit</h5></a>
                    <h6>Software Engineer at <a href="https://www.mordorintelligence.com" style={{marginBottom:"15px"}} >Mordor Intelligence</a></h6>
                    <small className="client__review">
                       I have had the pleasure of working with Samiul for some time now, and I can confidently say that they are one of the most talented software engineers I've ever worked with. Their ability to solve complex problems and deliver results quickly is truly remarkable. Not only that, but their collaborative and proactive approach has made them an invaluable member of our team. It's a privilege to work alongside such a skilled and dedicated colleague.
                    </small>
                </SwiperSlide>
            </Swiper>
            </Rotate>
        </section>
    );
};

export default Testimonials;