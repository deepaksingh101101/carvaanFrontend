import React from 'react';
import './PackagesCard.css';
import { IoIosStar } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";

export default function PackagesCard({ img, destination, rating, price, duration }) {
  return (
    <div className="card m-1 m-sm-3 m-md-3 m-lg-3 package_card border-0" style={{ width: "18rem" }}>
      <img loading='lazy' src={img} className="card-img-top existing_packages_img object-fit-cover" alt="..." />
      <div className="card-body package_card_body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <h6 className='existing_price fw-semibold my-0'>{destination}</h6>
            <div className="d-flex align-items-center">
              <span className='grey400 existing_rating fw-semibold'>{rating}</span>
              <IoIosStar className='star yellow400 ms-1 mt-0' />
            </div>
          </div>
          <div className="d-flex flex-column">
            <h6 className='green400 existing_price fw-semibold my-0'>${price}/-</h6>
            <span className='grey400 ms-0 ms-sm-4 ms-md-4  ms-lg-4 existing_perPerson fw-semibold'>Per Person</span>
          </div>
        </div>

        <div className="d-flex duration_outer mt-2 align-items-center">
          <FaLocationArrow className='duration' />
          <p className='grey400 ms-0 ms-sm-1 ms-md-1 ms-lg-1 my-0 duration fw-semibold'>{duration}</p>
        </div>
      </div>
    </div>
  );
}
