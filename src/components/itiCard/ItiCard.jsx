import React from 'react'
import img1 from "../../assets/trending/andaman.png";
import img2 from "../../assets/trending/chilka.png";
import img3 from "../../assets/trending/goa.png";
import { MdOutlineStar } from "react-icons/md";
import './ItiCard.css'
import { IoHeartCircleOutline } from "react-icons/io5";
export default function ItiCard() {
  return (
    <div className="card  px-2" style={{ width: "18rem" }}>
                <img
                  src={img2}
                  className="card-img-top mt-2"
                  alt="..."
                  style={{ height: "230px" }}
                />
                <div className="card-body p-0">
                  <div
                    className="d-flex mt-2 justify-content-between"
                    style={{ fontSize: "13px" }}
                  >
                    <p className="grey_text">7 Days 4 Night</p>
                    <p className="f-flex align-items-center justify-content-center">
                      <span className=" fw-bold me-1 " style={{ color: "green" }}>
                        <MdOutlineStar className="mb-1 " style={{ color: "green" }} />
                        4.6
                      </span>
                      <span className="grey_text">(244)</span>
                    </p>
                  </div>
                  <h6 className="card-title">
                    Dubai international special flight Deals
                  </h6>
                  <div className="d-flex" style={{ fontSize: "13px" }}>
                    <p>
                      <s className="grey_text">INR 2,34,455</s>
                    </p>
                    <p className="ms-2">
                      <span>
                        <b>INR 86,0000</b>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="btn w-100  py-2  pink_btn">
                    Book Now
                  </a>
                  <IoHeartCircleOutline
                    className=" heart ms-2"
                    style={{ fontSize: "51px" ,}}
                  />
                </div>
              </div>
  )
}
