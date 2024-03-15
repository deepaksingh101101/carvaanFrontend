import React from 'react';

import Slider from "../../components/slider/Slider";
import { LuHotel } from "react-icons/lu";
import { MdOutlineFoodBank } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import CardViewtabs from "../../components/cardViewtabs/CardViewtabs"
import './cardView.css'



const cities = [
  { name: "Kolkata", id: 1 },
  { name: "Delhi", id: 2 },
  { name: "Pune", id: 3 },
  { name: "Maharashtra", id: 4 },
  { name: "Belapur", id: 5 },
  { name: "Banaras", id: 6 },
  { name: "Delhi", id: 7 },
  { name: "Pune", id: 8 },
  { name: "Maharashtra", id: 9 },
  { name: "Belapur", id: 10 }
];


export default function CardView() {

  return (
    <div>
      <div className="container-fluid bg-light  mb-4 mt-3">
        <div className="row ">
          <div className="col-lg-8 mt-4">
            <Slider />

          </div>
          <div className="col-lg-4 container border rounded p-3 border bg-light mt-4">

            <div className="row mb-3">
              <div className="col">
                <h5 style={{ color: '#AE4A84', fontSize: 'clamp(10px, 1.2vw, 18px)' }}>4 days 3 Nights</h5>
              </div>
              <div className="col text-end box">
                <h6 style={{ color: '#000000', fontSize: 'clamp(10px, 1.2vw, 18px)'  }}>Seats: <span style={{ color: '#27AE60',  fontSize: 'clamp(10px, 1.2vw, 18px)' }}>30</span> <span style= {{ fontSize: 'clamp(10px, 1.2vw, 18px)' }}  className='box'>Seats left</span> </h6>
              </div>
            </div>
            <h6 className='box' style={{ fontSize: 'clamp(16px, 1.2vw, 18px)' }}>Stay Included This Package</h6>
            <div className="form-check form-check-inline ">
              <input className="form-check-input" type="radio" name="stayOption" id="camp" value="camp" />
              <label className="form-check-label" htmlFor="camp" style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }}>Camp</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="stayOption" id="hotel" value="hotel" />
              <label className="form-check-label" htmlFor="hotel" style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }}>Hotel</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="stayOption" id="dorm" value="dorm" />
              <label className="form-check-label" htmlFor="dorm" style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }}>Dorm</label>
            </div>

            <div className="d-flex align-items-center flex-wrap mt-2">
              <h6 className='m-0 mt-2' style={{ fontSize: 'clamp(12px, 1.2vw, 15px)' }}>Cities Included:</h6>
              {cities.map(city => (
                <p style={{ fontSize: 'clamp(12px, 1.2vw, 13px)' }} key={city.id} className="box mt-2 mb-0 px-1">{city.name} -</p>
              ))}
            </div>

            <div className="package-icons d-flex mt-3" >
              <div className="d-flex mx-3 align-items-center mb-3 flex-column">
                <LuHotel style={{ fontSize: 'clamp(12px, 1.2vw, 25px)' }} alt="hotel Logo" className="logo mb-1" />
                <h6 className="mb-0 box" style={{ fontSize: 'clamp(12px, 3vw, 12px)' }}>Hotel</h6>
              </div>

              <div className="d-flex mx-2 align-items-center mb-3 flex-column">
                <MdOutlineFoodBank style={{ fontSize: 'clamp(12px, 1.2vw, 25px)' }} alt="Meals Logo" className="logo mb-1" />
                <h6 className="mb-0 box" style={{ fontSize: 'clamp(12px, 3vw, 12px)' }}>Meals</h6>
              </div>

              <div className="d-flex mx-2 align-items-center mb-3 flex-column">
                <GrOverview style={{ fontSize: 'clamp(12px, 1.2vw, 25px)' }} alt="sightseeing Logo" className="logo mb-1" />
                <h6 className="mb-0 box" style={{ fontSize: 'clamp(12px, 3vw, 12px)' }}>Sightseeing</h6>
              </div>

              <div className="d-flex mx-3 align-items-center mb-3 flex-column">
                <RiGuideFill style={{ fontSize: 'clamp(12px, 1.2vw, 25px)' }} alt="sightseeing Logo" className="logo mb-1" />
                <h6 className="mb-0 box" style={{ fontSize: 'clamp(12px, 3vw, 12px)' }}>Travel Guide</h6>
              </div>

              <div className="d-flex mx-2 align-items-center mb-3 flex-column">
                <FaCarSide style={{ fontSize: 'clamp(12px, 1.2vw, 25px)' }} alt="sightseeing Logo" className="logo mb-1" />
                <h6 className="mb-0 box" style={{ fontSize: 'clamp(12px, 3vw, 12px)' }}>Transfers</h6>
              </div>
            </div>

            <hr className="mt-2" />


            <div className="mt-2">
              <div className="d-flex align-items-center">
                <h6 className="me-2 mt-2" style={{ color: '#98A2B3' }}>Our Price</h6>
                <span className="discount-tag bg-success text-white px-2 ">24% Off</span>
              </div>

              <div className='display-inline d-flex justify-content-between align-items-center'>
                <div>
                  <p className="m-0">
                    <span className="text-success fw-bold" style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }}>₹13,345/- </span>
                    <del style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }}>₹13,345</del>
                  </p>
                  <h6 className="m-0 box">Per person</h6>
                </div>

                <div className="text-end">
                  <h6 className="m-0 box" style={{ fontSize: 'clamp(12px, 1.2vw, 15px)' }}>Starting From</h6>
                  <p className="m-0 box" style={{ fontSize: 'clamp(12px, 1.2vw, 15px)' }}><SlCalender />10-03-2024</p>
                </div>
              </div>
            </div>

            <hr />
            <div className="row mt-5 ">
              <div className="col-6">
                <button className=" fw-semibold w-100 add_to_wish btn-primary btn-lg btn-block" style={{ backgroundColor: 'white', color: 'blue', borderRadius: '8px' , fontSize: 'clamp(10px, 1vw, 18px)' }}>Add to Wishlist</button>
              </div>
              <div className="col-6">
                <button className=" w-100  book_now btn-success btn-lg btn-block custom-shadow" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '8px', fontWeight: 'bold' , fontSize: 'clamp(10px, 1vw, 18px)' }}>Book now</button>
              </div>
            </div>


          </div>

        </div>

        <CardViewtabs />

      </div>
  
    </div>
  );
}
