
import { MdOutlineStar } from "react-icons/md";
import { IoHeartCircleOutline } from "react-icons/io5";
import './ItiCard.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, FreeMode,Keyboard, Pagination, Navigation } from 'swiper/modules';


export default function ItiCard({ itinerariesData }) {
 


  return (
    <>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        // modules={[Pagination]}
        freeMode={FreeMode}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        // autoplay={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Keyboard, Pagination, Navigation]}

        grabCursor={true}
        className="mySwiper"
      >
      <div className="itrCarousel">
        <div className="itrContainer overflow-hidden   d-flex justify-content align-items-center">
          
          {itinerariesData.map((data, index) => (
            <SwiperSlide  key={index} > <div className="card itiCard mx-lg-4 p-2" id='itiCard' style={{ maxWidth: "330px", height: "490px", minWidth: "300px" }}>
              <img
                src={data.img}
                loading='lazy'
                className="card-img-top iti_image object-fit-cover"
                alt="..."
                style={{ height: "270px" }}
              />
              <div className="card-body p-0">
                <div className="d-flex mt-2 justify-content-between" style={{ fontSize: "13px" }}>
                  <p className="grey_text">{data.time}</p>
                  <p className="d-flex align-items-center justify-content-center">
                    <span className="fw-bold me-1 handpickRating " style={{ color: "green" }}>
                      <MdOutlineStar className="mb-1 handpickRating " style={{ color: "green" }} />
                      {data.rating}
                    </span>
                    <span className="grey_text">({data.review})</span>
                  </p>
                </div>
                <h5 className="card_title">
                  {data.title}
                </h5>
                <div className="d-flex" >
                  <p>
                    <s className="oPrice fw-semibold ">{data.orignalPrice}</s>
                  </p>
                  <p className="ms-2">
                    <span>
                      <span className='dPrice fw-semibold' >{data.discountPrice}</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <a href="#" className="btn w-100  py-2  pink_btn">
                  Book Now
                </a>
                <IoHeartCircleOutline
                  className="heart ms-2"
                  style={{ fontSize: "51px" }}
                />
              </div>
            </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
      </Swiper>
    </>
  );
}
