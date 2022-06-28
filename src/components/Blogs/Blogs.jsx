import React from "react";
import { Rotate, Zoom } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ClientIMG from "../../assets/avatar1.jpg";
import Blog1IMG from '../../assets/samiul-islam-softsamiul-blog-everything-you-need-to-know-about-js-array.png';
import './Blogs.css'
// import "./styles.css";

const Blogs = () => {
  return (
    <section id="testimonials blogs">
      <Zoom>
        <h5>Articles I've written</h5>
        <h2 style={{marginBottom:"2rem"}}>Blogs</h2>
      </Zoom>
      <Rotate bottom right>
        <Swiper
          className="blogs_container container"
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        //   className="mySwiper"
        >
          <SwiperSlide>
            <a href="https://dev.to/softsamiul/everything-you-need-to-know-about-javascript-array-3jg" className="blogs-wrap" target="_blank">
                <div className="blog_thumb">
                    <img src={Blog1IMG} alt="" className="blog_thumb_img" />
                    <h4 className="blog_title">Everything you need to know about JavaScript Array</h4>
                </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://dev.to/softsamiul/everything-you-need-to-know-about-javascript-array-3jg" className="blogs-wrap" target="_blank">
                <div className="blog_thumb">
                    <img src={Blog1IMG} alt="" className="blog_thumb_img" />
                    <h4 className="blog_title">Everything you need to know about JavaScript Array</h4>
                </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://dev.to/softsamiul/everything-you-need-to-know-about-javascript-array-3jg" className="blogs-wrap" target="_blank">
                <div className="blog_thumb">
                    <img src={Blog1IMG} alt="" className="blog_thumb_img" />
                    <h4 className="blog_title">Everything you need to know about JavaScript Array</h4>
                </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://dev.to/softsamiul/everything-you-need-to-know-about-javascript-array-3jg" className="blogs-wrap" target="_blank">
                <div className="blog_thumb">
                    <img src={Blog1IMG} alt="" className="blog_thumb_img" />
                    <h4 className="blog_title">Everything you need to know about JavaScript Array</h4>
                </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </Rotate>
    </section>
  );
};

export default Blogs;
