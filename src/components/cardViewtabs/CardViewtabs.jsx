import React from 'react';
import './cardViewtabs.css';
import '../../components/cardnav/Cardnav';
import Cardnav from '../../components/cardnav/Cardnav';
import Cardnav2 from '../cardnav2/Cardnav2';
import CardNav3 from '../cardNav3/CardNav3';
import CardNav4 from '../cardNav4/CardNav4';
import CardNav5 from '../cardNav5/CardNav5';
import ReactStars from 'react-stars';
import { IoLocationOutline } from "react-icons/io5";
import image from '../../assets/cardView/image 880.png'
import { FaRegFilePdf } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export default function CardViewtabs() {
  return (
    <>
      <ul className="nav w-100 nav-tabs box" id="myTab" role="tablist">
        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" role="presentation">
        <a style={{textDecoration:"none"}} href='#overview_outer'> <button style={{ fontSize: 'clamp(7px, 1.2vw, 18px)' }} className="nav-link   px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0 " id="home-tab"  data-bs-target="#Overview" type="button" role="tab" aria-controls="Overview" aria-selected="true">Overview</button></a>
        </li>
        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" role="presentation">
         <a style={{textDecoration:"none"}} href='#itenarie_outer'> <button style={{ fontSize: 'clamp(7px, 1.2vw, 18px)' }}  className="nav-link    px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0" id="profile-tab"  data-bs-target="#Itineraries"  type="button" role="tab" aria-controls="Itineraries" aria-selected="false">Itineraries</button></a>
        </li>
        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" role="presentation">
          <button style={{ fontSize: 'clamp(7px, 1.2vw, 18px)' }} className="nav-link   px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0" id="Reviews-tab" data-bs-toggle="tab" data-bs-target="#Reviews" type="button" role="tab" aria-controls="Reviews" aria-selected="false">Reviews</button>
        </li>
        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" role="presentation">
        <a style={{textDecoration:"none"}} href='#inclusion_outer'> <button style={{ fontSize: 'clamp(7px, 1.2vw, 18px)' }} className="nav-link   px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0" id="InclusionExclusion-tab"  data-bs-target="#InclusionExclusion" type="button" role="tab" aria-controls="InclusionExclusion" aria-selected="false">Inclusion/Exclusion</button></a>
        </li>
        <li className="nav-item me-2 me-sm-3 me-md-3 me-lg-3  position-relative" role="presentation">
          <button style={{ fontSize: 'clamp(7px, 1.2vw, 18px)' }} className="nav-link   px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0" id="AbouttheAgency-tab" data-bs-toggle="tab" data-bs-target="#AbouttheAgency" type="button" role="tab" aria-controls="AbouttheAgency" aria-selected="false">About the Agency</button>
        </li>
      </ul>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='mt-4'>
            <h2>Lakeside Motel Warefront</h2>
            <p className='d-flex align-items-center gap-2'>
              <ReactStars
                count={5}
                size={24}
                value={4.5}
                edit={false}
                color2={'#ffd700'} />
              4.5 (1200 Reviews)
            </p>
            <p>
              <IoLocationOutline className='me-2' style={{ color: '#4263C9' }} />
              Lorem ipsum road, Tantruim-2322, Melbourne, Australia
            </p>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="Overview" role="tabpanel" aria-labelledby="overview-tab">
              <Cardnav/>
            </div>
            <div className="tab-pane fade" id="Itineraries" role="tabpanel" aria-labelledby="profile-tab">
              <Cardnav2 /> 
            </div>
            <div className="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
              <CardNav3 />
              </div>
            <div className="tab-pane fade" id="InclusionExclusion" role="tabpanel" aria-labelledby="InclusionExclusion-tab">
              <CardNav4 />
              </div>
            <div className="tab-pane fade" id="AbouttheAgency" role="tabpanel" aria-labelledby="AbouttheAgency-tab"
            ><CardNav5 />
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-5'>

          <div className="container d-flex flex-column" >
           
              <a href="#" className="btn btn-primary border rounded mb-3 py-2 mx-1" style= {{background: "#AE4A84", color: "#FFFFFF"}}> Download as a PDF</a>
              <FaRegFilePdf className="ms-2 " style= {{color: "#FFFFFF"}} />
           
            <a href="#" className="btn btn-primary border rounded mb-3 py-2 mx-1" style= {{background: "#AE4A84", color: "#FFFFFF"}}> Share with WhatsApp</a>
              <FaWhatsapp className="me-2" style= {{color: "#FFFFFF"}} />
             
           
          </div>
          <div className="container border rounded bg-white mt-1">
            <div className='mt-4'>
              <h4>Pick up Location:</h4>
              <p><IoLocationOutline />Majnu ka Tela, Delhi</p>
            </div>
            <hr />
            <div>
              <h4>Drop Location:</h4>
              <p><IoLocationOutline />Majnu ka Tela, Delhi</p>
            </div>
          </div>
          <div className='me-4 mt-5'>
            <div className='img_cont me-4 mt-5'>
              <img className='carvan_img' src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
