import React, { useEffect, useRef, useState } from 'react';
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
  const [Overview, setOverview] = useState(true);
  const [Iter, setIter] = useState(false);
  const [Inclusion, setInclusion] = useState(false);
  const [Reviews, setReviews] = useState(false);
  const [About, setAbout] = useState(false);

  const handleOverview = () => {
    setOverview(true);
    setIter(false);
    setInclusion(false);
    setReviews(false);
    setAbout(false)
  }
  const handleIter = () => {
    setOverview(false);
    setIter(true);
    setInclusion(false);
    setReviews(false);
    setAbout(false)
  }
  const handleInclusion = () => {
    setOverview(false);
    setIter(false);
    setInclusion(true);
    setReviews(false);
    setAbout(false)
  }
  const handleReviews = () => {
    setOverview(false);
    setIter(false);
    setInclusion(false);
    setReviews(true);
    setAbout(false)
  }
  const handleAbout = () => {
    setOverview(false);
    setIter(false);
    setInclusion(false);
    setReviews(false);
    setAbout(true);
  }

  const itinerariesRef = useRef(null);
  const inclusionRef = useRef(null);

  // useEffect to perform the scroll when the Itineraries tab is active
  useEffect(() => {
    if (Iter) {
      itinerariesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (Inclusion) {
      inclusionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [Iter, Inclusion]);
  return (
    <>
      <ul className="nav w-100 nav-tabs box" id="myTab" role="tablist">
        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" onClick={handleOverview} role="presentation">
          <button style={{ fontSize: 'clamp(10px, 1.2vw, 18px)' }} className={`nav-link  px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0 ${Overview ? 'active' : ''} `} id="home-tab" data-bs-toggle={`${Overview ? 'tab' : 'tab'}`} data-bs-target="#Overview" type="button" role="tab" aria-controls="Overview" aria-selected={`${Overview ? 'true' : 'false'}`}>Overview</button>
        </li>

        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" onClick={handleIter} role="presentation">
          <button style={{ fontSize: 'clamp(10px, 1.2vw, 18px)' }} className={`nav-link  px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0 ${Iter ? 'active' : ''}`} id="profile-tab" data-bs-toggle={`${Iter ? 'tab' : 'tab'}`} data-bs-target="#Itineraries" type="button" role="tab" aria-controls="Itineraries" aria-selected={`${Iter ? 'true' : 'false'}`}>Itineraries</button>
        </li>

        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" onClick={handleInclusion} role="presentation">
          <button style={{ fontSize: 'clamp(10px, 1.2vw, 18px)' }} className={`nav-link   px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0 ${Inclusion ? 'active' : ''}`} id="InclusionExclusion-tab" data-bs-target="#InclusionExclusion" type="button" role="tab" aria-controls="InclusionExclusion" aria-selected={`${Iter ? 'true' : 'false'}`}>Inclusion/Exclusion</button>
        </li>
        <li className="nav-item   me-2 me-sm-3 me-md-3 me-lg-3 position-relative" onClick={handleReviews} role="presentation">
          <button style={{ fontSize: 'clamp(10px, 1.2vw, 18px)' }} className={`nav-link   px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0 ${Reviews ? 'active' : ''} `} id="Reviews-tab" data-bs-toggle={`${Reviews ? 'tab' : 'tab'}`} data-bs-target="#Reviews" type="button" role="tab" aria-controls="Reviews" aria-selected={`${Reviews ? 'true' : 'false'}`}>Reviews</button>
        </li>

        <li className="nav-item me-2 me-sm-3 me-md-3 me-lg-3  position-relative" onClick={handleAbout} role="presentation">
          <button style={{ fontSize: 'clamp(10px, 1.2vw, 18px)' }} className={`nav-link   px-0 px-sm-0 px-md-1 px-lg-2 text-dark border-0 ${About ? 'active' : ''} `} id="AbouttheAgency-tab" data-bs-toggle={`${About ? 'tab' : 'tab'}`} data-bs-target="#AbouttheAgency" type="button" role="tab" aria-controls="AbouttheAgency" aria-selected={`${About ? 'true' : 'false'}`}>About the Agency</button>
        </li>
      </ul>
      <div className='row'>
        <div className='col-lg-8 '>
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
              <Cardnav />
              <Cardnav2 />
              <CardNav4 />

            </div>
            <div className={`tab-pane fade ${Iter ? 'show active' : ''}`} id="Itineraries" role="tabpanel" aria-labelledby="profile-tab" >
              <Cardnav />
              <div ref={itinerariesRef}>
                <Cardnav2 />
              </div>
              <CardNav4 />
            </div>
            <div className="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
              <CardNav3 />
            </div>
            <div className={`tab-pane fade ${Inclusion ? 'show active' : ''}`} id="InclusionExclusion" role="tabpanel" aria-labelledby="InclusionExclusion-tab">
              <Cardnav />
              <Cardnav2 />
              <div ref={inclusionRef}>
                <CardNav4 />
              </div>
            </div>
            <div className="tab-pane fade" id="AbouttheAgency" role="tabpanel" aria-labelledby="AbouttheAgency-tab">
              <CardNav5 />
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-5 '>

          <div className="container d-flex flex-column align-items-end" style={{ display: 'inline-flex' }}>
            <a href="#" className="btn btn-primary border rounded mb-3 py-2 d-flex align-items-center fw-semibold" style={{ background: "#AE4A84" }}>
              
              <span>Download as a PDF</span><FaRegFilePdf className="mx-2 fw-bold fs-4" style={{ color: "#FFFFFF" }} />
            </a>

            <a href="#" className="btn btn-primary border rounded mb-3 py-2 d-flex align-items-center share-whatsapp fw-semibold" style={{ background: "#AE4A8417" }}>
              <FaWhatsapp className="mx-2 fw-bold fs-4" style={{ color: "#AE4A84" }} />
              <span style= {{color: '#AE4A84'}}>Share with WhatsApp</span>
            </a>
          </div>



          <div className="container border rounded bg-white mt-4">
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
