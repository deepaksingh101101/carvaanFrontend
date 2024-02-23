import React from 'react';
import './PackagesCard.css';
import { IoIosStar } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";

export default function PackagesCard({ domesticCardData }) {
  return (
    <>
      {domesticCardData.map((cardData, index) => (
        <div key={index} className="card m-3 package_card border-0" style={{ width: "18rem", borderRadius: "" }}>
          <img loading='lazy' src={cardData.img} className="card-img-top existing_packages_img object-fit-cover" alt="..." />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <h6 className='existing_price fw-semibold my-0'>{cardData.destination}</h6>
                <div className="d-flex align-items-center">
                  <span className='grey400 existing_rating fw-semibold'>{cardData.rating}</span>
                  <IoIosStar className='star yellow400 ms-1 mt-0' />
                </div>
              </div>
              <div className="d-flex flex-column">
                <h6 className='green400 existing_price fw-semibold my-0'>${cardData.price}/-</h6>
                <span className='grey400 ms-4 existing_perPerson fw-semibold'>Per Person</span>
              </div>
            </div>

            <div className="d-flex mt-2 align-items-center">
              <FaLocationArrow />
              <p className='grey400 ms-1 my-0 fw-semibold'>{cardData.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
