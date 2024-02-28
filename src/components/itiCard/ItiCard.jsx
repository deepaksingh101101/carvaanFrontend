import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import { IoHeartCircleOutline } from "react-icons/io5";
import './ItiCard.css';

export default function ItiCard({  time, rating, review, title, orignalPrice, discountPrice, img }) {
  return (
    <div className="card itiCard mx-lg-4 p-2" style={{ maxWidth: "330px",height:"490px",minWidth:"300px" }}>
      <img
        src={img}
        loading='lazy'
        className="card-img-top iti_image object-fit-cover"
        alt="..."
        style={{ height:"270px" }}
      />
      <div className="card-body p-0">
        <div className="d-flex mt-2 justify-content-between" style={{ fontSize: "13px" }}>
          <p className="grey_text">{time}</p>
          <p className="d-flex align-items-center justify-content-center">
            <span className="fw-bold me-1 handpickRating " style={{ color: "green" }}>
              <MdOutlineStar className="mb-1 handpickRating " style={{ color: "green" }} />
              {rating}
            </span>
            <span className="grey_text">({review})</span>
          </p>
        </div>
        <h5 className="card_title">
          {title}
        </h5>
        <div className="d-flex" >
          <p>
            <s className="oPrice fw-semibold ">{orignalPrice}</s>
          </p>
          <p className="ms-2">
            <span>
              <span className='dPrice fw-semibold' >{discountPrice}</span>
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
  );
}
