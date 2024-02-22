import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import { IoHeartCircleOutline } from "react-icons/io5";
import './ItiCard.css';

export default function ItiCard({ time, rating, review, title, orignalPrice, discountPrice, img }) {
  return (
    <div className="card px-2" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top mt-2"
        alt="..."
        style={{ height: "230px" }}
      />
      <div className="card-body p-0">
        <div className="d-flex mt-2 justify-content-between" style={{ fontSize: "13px" }}>
          <p className="grey_text">{time}</p>
          <p className="d-flex align-items-center justify-content-center">
            <span className="fw-bold me-1 " style={{ color: "green" }}>
              <MdOutlineStar className="mb-1 " style={{ color: "green" }} />
              {rating}
            </span>
            <span className="grey_text">({review})</span>
          </p>
        </div>
        <h6 className="card-title">
          {title}
        </h6>
        <div className="d-flex" style={{ fontSize: "13px" }}>
          <p>
            <s className="grey_text">{orignalPrice}</s>
          </p>
          <p className="ms-2">
            <span>
              <b>{discountPrice}</b>
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
