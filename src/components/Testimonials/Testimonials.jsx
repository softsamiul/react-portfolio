import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Rotate from 'react-reveal/Rotate';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Zoom from 'react-reveal/Zoom';
import './Testimonials.css'
import ClientIMG from '../../assets/avatar1.jpg';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <Zoom>
                <h5>Review From Clients</h5>
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
                    <h5 className='client__name'>Sai Teja</h5>
                    <small className="cleint_review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate adipisci enim? Error sint excepturi explicabo perspiciatis saepe! Eum, doloremque?
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={ClientIMG} alt="" />
                    </div>
                    <h5 className='client__name'>Sai Teja</h5>
                    <small className="cleint_review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate adipisci enim? Error sint excepturi explicabo perspiciatis saepe! Eum, doloremque?
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={ClientIMG} alt="" />
                    </div>
                    <h5 className='client__name'>Sai Teja</h5>
                    <small className="cleint_review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate adipisci enim? Error sint excepturi explicabo perspiciatis saepe! Eum, doloremque?
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={ClientIMG} alt="" />
                    </div>
                    <h5 className='client__name'>Sai Teja</h5>
                    <small className="cleint_review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate adipisci enim? Error sint excepturi explicabo perspiciatis saepe! Eum, doloremque?
                    </small>
                </SwiperSlide>
            </Swiper>
            </Rotate>
        </section>
    );
};

export default Testimonials;